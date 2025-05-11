import '../styles/Search.css';
import '../styles/BugReport.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

interface Webhook {
  id: number;
  url: string;
  event: string;
  enabled: boolean;
  projectId: number;
  project: { name: string };
  creator: { username: string };
  createdAt: string;
}

interface WebhookForm {
  url: string;
  event: string;
  projectId: number;
}

const Webhooks: React.FC = () => {
  const { user, projects, currentProjectId } = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [formData, setFormData] = useState<WebhookForm>({
    url: '',
    event: 'bug_report_created',
    projectId: currentProjectId || 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchWebhooks();
    } else {
      setError('Вы должны быть авторизованы для управления вебхуками.');
    }
  }, [user]);

  const fetchWebhooks = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/webhooks${formData.projectId ? `?projectId=${formData.projectId}` : ''}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Не удалось загрузить вебхуки');
      const data = await response.json();
      setWebhooks(data.webhooks);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить вебхуки');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projectId' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Вы должны быть авторизованы для создания вебхука.');
      return;
    }
    if (!formData.projectId) {
      setError('Выберите проект.');
      return;
    }
    if (!formData.url.trim()) {
      setError('URL обязателен.');
      return;
    }
    if (!formData.event) {
      setError('Выберите событие.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/webhooks/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          ...formData,
          creatorId: user.id,
        }),
      });
      if (!response.ok) throw new Error('Не удалось создать вебхук');
      setSuccess('Вебхук успешно создан!');
      setFormData({
        url: '',
        event: 'bug_report_created',
        projectId: formData.projectId,
      });
      fetchWebhooks();
    } catch (err: any) {
      setError(err.message || 'Не удалось создать вебхук');
    }
  };

  const handleToggleEnabled = async (webhookId: number, enabled: boolean) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/webhooks/edit/${webhookId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ enabled: !enabled }),
        }
      );
      if (!response.ok) throw new Error('Не удалось обновить вебхук');
      setSuccess(`Вебхук ${enabled ? 'отключён' : 'включён'}!`);
      fetchWebhooks();
    } catch (err: any) {
      setError(err.message || 'Не удалось обновить вебхук');
    }
  };

  const handleDelete = async (webhookId: number) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/webhooks/${webhookId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Не удалось удалить вебхук');
      setSuccess('Вебхук успешно удалён!');
      fetchWebhooks();
    } catch (err: any) {
      setError(err.message || 'Не удалось удалить вебхук');
    }
  };

  return (
    <div className="search-container">
      <h2>Управление вебхуками</h2>
      <form
        id="webhookForm"
        onSubmit={handleSubmit}
        className="bug-report-container"
      >
        <div className="form-group">
          <label htmlFor="url">URL вебхука</label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
            placeholder="Введите URL вебхука (например, https://n8n.example.com)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="event">Событие</label>
          <select
            id="event"
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
          >
            <option value="bug_report_created">Создание баг-репорта</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectId">Проект</label>
          <select
            id="projectId"
            name="projectId"
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
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Создать вебхук</button>
      </form>
      <table className="search-table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Событие</th>
            <th>Проект</th>
            <th>Создатель</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {webhooks.map(webhook => (
            <tr key={webhook.id}>
              <td>{webhook.url}</td>
              <td>
                {webhook.event === 'bug_report_created'
                  ? 'Создание баг-репорта'
                  : webhook.event}
              </td>
              <td>{webhook.project.name}</td>
              <td>{webhook.creator.username}</td>
              <td>{webhook.enabled ? 'Включён' : 'Отключён'}</td>
              <td>
                <button
                  onClick={() =>
                    handleToggleEnabled(webhook.id, webhook.enabled)
                  }
                >
                  {webhook.enabled ? 'Отключить' : 'Включить'}
                </button>
                <button onClick={() => handleDelete(webhook.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Webhooks;
