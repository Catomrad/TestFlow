import '../styles/TestCase.css';

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.tsx';

interface Module {
  id: number;
  name: string;
}

interface TestCase {
  id: string;
  title: string;
  priority: string;
  class: string;
  moduleId: number;
  module: { name: string };
  status: string;
  template: string;
  requiredTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  content: string;
  description: string;
  projectId: number;
  project: { name: string };
  creatorId: number;
  creator: { username: string };
}

const CaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, projects } = useAuth();
  const navigate = useNavigate();
  const [testCase, setTestCase] = useState<TestCase | null>(null);
  const [formData, setFormData] = useState<TestCase | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user || !id) {
      setError('You must be logged in to view this test case.');
      return;
    }
    fetchTestCase();
  }, [user, id]);

  const fetchTestCase = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/test-case/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch test case');
      const data = await response.json();
      setTestCase(data.testCase);
      setFormData(data.testCase);
      fetchModules(data.testCase.projectId);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch test case');
    }
  };

  const fetchModules = async (projectId: number) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/module?projectId=${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch modules');
      const data = await response.json();
      setModules(data.modules);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch modules');
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
            [name]:
              name === 'projectId' || name === 'moduleId'
                ? parseInt(value)
                : value,
          }
        : null
    );
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev =>
      prev
        ? {
            ...prev,
            requiredTime: { ...prev.requiredTime, [name]: Number(value) },
          }
        : null
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData || !id) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/test-case/edit/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            title: formData.title,
            priority: formData.priority,
            class: formData.class,
            moduleId: formData.moduleId,
            status: formData.status,
            template: formData.template,
            requiredTime: formData.requiredTime,
            content: formData.content,
            description: formData.description,
            projectId: formData.projectId,
          }),
        }
      );
      if (!response.ok) throw new Error('Failed to update test case');
      setSuccess('Test case updated successfully!');
      setIsEditing(false);
      fetchTestCase();
    } catch (err: any) {
      setError(err.message || 'Failed to update test case');
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this test case?'))
      return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/test-case/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to delete test case');
      setSuccess('Test case deleted successfully!');
      navigate('/search/cases');
    } catch (err: any) {
      setError(err.message || 'Failed to delete test case');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!testCase || !formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="test-case-container">
      <h2>Тест-кейс: {testCase.title}</h2>
      {isEditing ? (
        <form id="testCaseForm" onSubmit={handleSubmit}>
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
          <div className="row">
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
              <label htmlFor="class">Класс</label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
              >
                <option value="">Выберите класс</option>
                <option value="functional">Функциональный</option>
                <option value="ui">UI</option>
                <option value="integration">Интеграционный</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="moduleId">Модуль</label>
              <select
                id="moduleId"
                name="moduleId"
                value={formData.moduleId}
                onChange={handleChange}
                required
              >
                <option value={0}>Выберите модуль</option>
                {modules.map(module => (
                  <option key={module.id} value={module.id}>
                    {module.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="status">Статус</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Выберите статус</option>
                <option value="draft">Черновик</option>
                <option value="active">Активный</option>
                <option value="closed">Закрыт</option>
              </select>
            </div>
          </div>
          <div className="row">
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
                <option value="api">API</option>
              </select>
            </div>
            <div className="required-time">
              <label>Требуемое время</label>
              <div className="time">
                <input
                  type="number"
                  className="input-time"
                  name="days"
                  min={0}
                  value={formData.requiredTime.days}
                  onChange={handleTimeChange}
                  placeholder="0"
                />
                <span>D</span>
                <input
                  type="number"
                  className="input-time"
                  name="hours"
                  min={0}
                  value={formData.requiredTime.hours}
                  onChange={handleTimeChange}
                  placeholder="0"
                />
                <span>H</span>
                <input
                  type="number"
                  className="input-time"
                  name="minutes"
                  min={0}
                  value={formData.requiredTime.minutes}
                  onChange={handleTimeChange}
                  placeholder="0"
                />
                <span>M</span>
                <input
                  type="number"
                  className="input-time"
                  name="seconds"
                  min={0}
                  value={formData.requiredTime.seconds}
                  onChange={handleTimeChange}
                  placeholder="0"
                />
                <span>S</span>
              </div>
            </div>
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
            <label htmlFor="content">Содержание</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Введите содержание тест-кейса"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Описание</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Введите описание тест-кейса"
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
            <strong>Название:</strong> {testCase.title}
          </p>
          <p>
            <strong>Приоритет:</strong> {testCase.priority}
          </p>
          <p>
            <strong>Класс:</strong> {testCase.class}
          </p>
          <p>
            <strong>Модуль:</strong> {testCase.module.name}
          </p>
          <p>
            <strong>Статус:</strong> {testCase.status}
          </p>
          <p>
            <strong>Шаблон:</strong> {testCase.template}
          </p>
          <p>
            <strong>Требуемое время:</strong> {testCase.requiredTime.days}d{' '}
            {testCase.requiredTime.hours}h {testCase.requiredTime.minutes}m{' '}
            {testCase.requiredTime.seconds}s
          </p>
          <p>
            <strong>Проект:</strong> {testCase.project.name}
          </p>
          <p>
            <strong>Создатель:</strong> {testCase.creator.username}
          </p>
          <p>
            <strong>Содержание:</strong> {testCase.content}
          </p>
          <p>
            <strong>Описание:</strong> {testCase.description}
          </p>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={() => navigate('/search/cases')}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default CaseDetail;
