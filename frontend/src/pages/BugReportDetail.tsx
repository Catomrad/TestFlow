import '../styles/TestCase.css';

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.tsx';

interface TestCase {
  id: string;
  title: string;
}

interface BugReport {
  id: string;
  title: string;
  environment: string;
  version: string;
  priority: string;
  frequency: string;
  content: string;
  template: string;
  projectId: number;
  project: { name: string };
  creatorId: number;
  creator: { username: string };
  testCaseId: string | null;
  testCase: { title: string } | null;
}

const BugReportDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, projects } = useAuth();
  const navigate = useNavigate();
  const [bugReport, setBugReport] = useState<BugReport | null>(null);
  const [formData, setFormData] = useState<BugReport | null>(null);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user || !id) {
      setError('Вы должны быть авторизованы для просмотра баг-репорта.');
      return;
    }
    fetchBugReport();
  }, [user, id]);

  const fetchBugReport = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bug-reports/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch bug report');
      const data = await response.json();
      setBugReport(data.bugReport);
      setFormData(data.bugReport);
      fetchTestCases(data.bugReport.projectId);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить баг-репорт.');
    }
  };

  const fetchTestCases = async (projectId: number) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/test-case?projectId=${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch test cases');
      const data = await response.json();
      setTestCases(data.testCases);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить тест-кейсы.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev =>
      prev
        ? {
            ...prev,
            [name]: name === 'projectId' ? parseInt(value) : value,
            ...(name === 'projectId' ? { testCaseId: null } : {}),
          }
        : null
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData || !id) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/bug-reports/edit/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            title: formData.title,
            environment: formData.environment,
            version: formData.version,
            priority: formData.priority,
            frequency: formData.frequency,
            content: formData.content,
            template: formData.template,
            projectId: formData.projectId,
            testCaseId: formData.testCaseId || null,
          }),
        }
      );
      if (!response.ok) throw new Error('Failed to update bug report');
      setSuccess('Баг-репорт успешно обновлен!');
      setIsEditing(false);
      fetchBugReport();
    } catch (err: any) {
      setError(err.message || 'Не удалось обновить баг-репорт.');
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    if (!window.confirm('Вы уверены, что хотите удалить этот баг-репорт?'))
      return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/bug-reports/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to delete bug report');
      setSuccess('Баг-репорт успешно удален!');
      navigate('/search/bug-reports');
    } catch (err: any) {
      setError(err.message || 'Не удалось удалить баг-репорт.');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!bugReport || !formData) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="test-case-container">
      <h2>Баг-репорт: {bugReport.title}</h2>
      {isEditing ? (
        <form id="bugReportForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Название</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              maxLength={255}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectId">Проект</label>
            <select
              id="projectId"
              name="projectId"
              value={formData.projectId}
              onChange={handleChange}
              required
            >
              <option value={0}>Выберите проект</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="testCaseId">Тест-кейс</label>
            <select
              id="testCaseId"
              name="testCaseId"
              value={formData.testCaseId || ''}
              onChange={handleChange}
              disabled={!formData.projectId}
            >
              <option value="">Без тест-кейса</option>
              {testCases.map(testCase => (
                <option key={testCase.id} value={testCase.id}>
                  {testCase.title}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="environment">Окружение</label>
              <select
                id="environment"
                name="environment"
                value={formData.environment}
                onChange={handleChange}
              >
                <option value="">Выберите окружение</option>
                <option value="windows">Windows</option>
                <option value="linux">Linux</option>
                <option value="android">Android</option>
                <option value="ios">iOS</option>
                <option value="all">Все</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="priority">Приоритет</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="">Выберите приоритет</option>
                <option value="high">Высокий</option>
                <option value="medium">Средний</option>
                <option value="low">Низкий</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="frequency">Частота</label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
              >
                <option value="">Выберите частоту</option>
                <option value="always">Всегда</option>
                <option value="very_often">Очень часто</option>
                <option value="often">Часто</option>
                <option value="rarely">Редко</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="version">Версия</label>
            <input
              type="text"
              id="version"
              name="version"
              value={formData.version}
              onChange={handleChange}
              placeholder="Введите версию ПО"
            />
          </div>
          <div className="form-group">
            <label htmlFor="template">Шаблон</label>
            <select
              id="template"
              name="template"
              value={formData.template}
              onChange={handleChange}
            >
              <option value="">Без шаблона</option>
              <option value="basic">Базовый</option>
              <option value="detailed">Детальный</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Опишите шаги для воспроизведения бага"
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type="submit">Сохранить</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Отмена
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Название:</strong> {bugReport.title}
          </p>
          <p>
            <strong>Окружение:</strong> {bugReport.environment}
          </p>
          <p>
            <strong>Версия:</strong> {bugReport.version}
          </p>
          <p>
            <strong>Приоритет:</strong> {bugReport.priority}
          </p>
          <p>
            <strong>Частота:</strong> {bugReport.frequency}
          </p>
          <p>
            <strong>Шаблон:</strong> {bugReport.template}
          </p>
          <p>
            <strong>Проект:</strong> {bugReport.project.name}
          </p>
          <p>
            <strong>Тест-кейс:</strong> {bugReport.testCase?.title || 'Нет'}
          </p>
          <p>
            <strong>Создатель:</strong> {bugReport.creator.username}
          </p>
          <p>
            <strong>Шаги воспроизведения:</strong> {bugReport.content}
          </p>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={() => navigate('/search/bug-reports')}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default BugReportDetail;
