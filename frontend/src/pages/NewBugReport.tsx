import '../styles/BugReport.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

interface TestCase {
  id: string;
  title: string;
}

interface BugReportForm {
  title: string;
  environment: string;
  version: string;
  priority: string;
  frequency: string;
  content: string;
  template: string;
  projectId: number;
  testCaseId: string;
}

const NewBugReport: React.FC = () => {
  const { user, projects, currentProjectId } = useAuth();
  const [formData, setFormData] = useState<BugReportForm>({
    title: '',
    environment: '',
    version: '',
    priority: '',
    frequency: '',
    content: '',
    template: '',
    projectId: currentProjectId || 0,
    testCaseId: '',
  });
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (formData.projectId) {
      fetchTestCases(formData.projectId);
    } else {
      setTestCases([]);
      setFormData(prev => ({ ...prev, testCaseId: '' }));
    }
  }, [formData.projectId]);

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
      if (!response.ok) throw new Error('Не удалось загрузить тест-кейсы');
      const data = await response.json();
      setTestCases(data.testCases);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить тест-кейсы');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projectId' ? parseInt(value) : value,
      ...(name === 'projectId' ? { testCaseId: '' } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Вы должны быть авторизованы для создания баг-репорта.');
      return;
    }
    if (!formData.projectId) {
      setError('Выберите проект.');
      return;
    }
    if (!formData.title.trim()) {
      setError('Название обязательно.');
      return;
    }

    const bugReportData = {
      ...formData,
      creatorId: user.id,
      testCaseId: formData.testCaseId || null,
    };
    try {
      const response = await fetch(
        'http://localhost:5000/api/bug-reports/new',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(bugReportData),
        }
      );
      if (!response.ok) throw new Error('Не удалось создать баг-репорт');
      setSuccess('Баг-репорт успешно создан!');
      setFormData({
        title: '',
        environment: '',
        version: '',
        priority: '',
        frequency: '',
        content: '',
        template: '',
        projectId: formData.projectId,
        testCaseId: '',
      });
    } catch (err: any) {
      setError(err.message || 'Не удалось создать баг-репорт.');
    }
  };

  return (
    <div className="bug-report-container">
      <h2>Создать баг-репорт</h2>
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
            placeholder="Введите название баг-репорта"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectId">Проект</label>
          <select
            name="projectId"
            id="projectId"
            value={formData.projectId}
            onChange={handleChange}
            required
            disabled={!!currentProjectId}
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
            value={formData.testCaseId}
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
        <div className="form-group">
          <label htmlFor="version">Версия</label>
          <input
            type="text"
            id="version"
            name="version"
            value={formData.version}
            onChange={handleChange}
            placeholder="Введите версию"
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
          <label htmlFor="content">Описание</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Опишите шаги для воспроизведения бага"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Сохранить баг-репорт</button>
      </form>
    </div>
  );
};

export default NewBugReport;
