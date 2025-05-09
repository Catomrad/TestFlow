import '../styles/TestCase.css';

import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

interface TestCaseForm {
  title: string;
  priority: string;
  class: string;
  module: string;
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
}

const NewTest: React.FC = () => {
  const { user, projects, currentProjectId, createTestCase } = useAuth();
  const [formData, setFormData] = useState<TestCaseForm>({
    title: '',
    priority: '',
    class: '',
    module: '',
    status: '',
    template: '',
    requiredTime: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    content: '',
    description: '',
    projectId: currentProjectId || 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projectId' ? parseInt(value) : value,
    }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      requiredTime: { ...prev.requiredTime, [name]: Number(value) },
    }));
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, template: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to create a test case.');
      return;
    }
    if (!formData.projectId) {
      setError('Please select a project.');
      return;
    }
    if (!formData.title.trim()) {
      setError('Title is required.');
      return;
    }

    const testCaseData = { ...formData, creatorId: user.id };
    console.log('Sending test case data:', testCaseData);

    try {
      await createTestCase(testCaseData);
      setSuccess('Test case created successfully!');
      setFormData({
        title: '',
        priority: '',
        class: '',
        module: '',
        status: '',
        template: '',
        requiredTime: { days: 0, hours: 0, minutes: 0, seconds: 0 },
        content: '',
        description: '',
        projectId: formData.projectId,
      });
    } catch (err: any) {
      setError(err.message || 'Failed to create test case.');
    }
  };

  return (
    <div>
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
            placeholder="Введите название тест-кейса"
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
            <label htmlFor="module">Модуль</label>
            <select
              id="module"
              name="module"
              value={formData.module}
              onChange={handleChange}
            >
              <option value="">Выберите модуль</option>
              <option value="auth">Аутентификация</option>
              <option value="payment">Платежи</option>
              <option value="dashboard">Дашборд</option>
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
              onChange={handleTemplateChange}
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
        <button type="submit">Сохранить тест-кейс</button>
      </form>
    </div>
  );
};

export default NewTest;
