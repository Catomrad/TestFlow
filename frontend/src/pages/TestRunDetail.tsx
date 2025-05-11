import '../styles/TestCase.css';

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.tsx';

interface TestPlan {
  id: string;
  name: string;
}

interface ProjectMember {
  userId: number;
  user: { username: string };
}

interface TestRun {
  id: string;
  title: string;
  content: string;
  status: string;
  plannedDate: string;
  completionDate: string | null;
  projectId: number;
  project: { name: string };
  testPlanId: string | null;
  testPlan: { name: string } | null;
  responsibleId: number;
  responsible: { username: string };
}

const TestRunDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, projects } = useAuth();
  const navigate = useNavigate();
  const [testRun, setTestRun] = useState<TestRun | null>(null);
  const [formData, setFormData] = useState<TestRun | null>(null);
  const [testPlans, setTestPlans] = useState<TestPlan[]>([]);
  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user || !id) {
      setError('Вы должны быть авторизованы для просмотра тестового прогона.');
      return;
    }
    fetchTestRun();
  }, [user, id]);

  const fetchTestRun = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/test-runs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch test run');
      const data = await response.json();
      setTestRun(data.testRun);
      setFormData(data.testRun);
      fetchTestPlans(data.testRun.projectId);
      fetchMembers(data.testRun.projectId);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить тестовый прогон.');
    }
  };

  const fetchTestPlans = async (projectId: number) => {
    try {
      if (!Number.isInteger(projectId) || projectId <= 0) {
        throw new Error(`Invalid projectId: ${projectId}`);
      }
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authorization token found');
      }
      const response = await fetch(
        `http://localhost:5000/api/test-plan?projectId=${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Test plans response:', response.status, errorText);
        throw new Error(
          `Failed to fetch test plans: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      console.log('Test plans fetched:', data.testPlans);
      setTestPlans(data.testPlans);
    } catch (err: any) {
      console.error('Error fetching test plans:', err);
      setError(err.message || 'Не удалось загрузить тест-планы.');
    }
  };

  const fetchMembers = async (projectId: number) => {
    try {
      console.log('Fetching members for projectId:', projectId);
      if (!Number.isInteger(projectId) || projectId <= 0) {
        throw new Error(`Invalid projectId: ${projectId}`);
      }
      const token = localStorage.getItem('token');
      console.log('Authorization token:', token ? 'Present' : 'Missing');
      if (!token) {
        throw new Error('No authorization token found');
      }
      const response = await fetch(
        `http://localhost:5000/api/projects/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Members response:', response.status, errorText);
        throw new Error(
          `Failed to fetch members: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      console.log('Project fetched:', data);
      if (!data.project || !Array.isArray(data.project.members)) {
        throw new Error('Invalid project or members data format');
      }
      // Преобразуем members в формат ProjectMember[]
      const formattedMembers: ProjectMember[] = data.project.members.map(
        (member: any) => ({
          userId: member.user.id,
          user: {
            username: member.user.username,
          },
        })
      );
      console.log('Members formatted:', formattedMembers);
      setMembers(formattedMembers);
    } catch (err: any) {
      console.error('Error fetching members:', err);
      setError(err.message || 'Не удалось загрузить участников проекта.');
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
              name === 'projectId' || name === 'responsibleId'
                ? parseInt(value) || 0
                : value,
            ...(name === 'projectId'
              ? { testPlanId: null, responsibleId: 0 }
              : {}),
          }
        : null
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData || !id) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/test-runs/edit/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            title: formData.title,
            content: formData.content,
            status: formData.status,
            plannedDate: formData.plannedDate,
            completionDate: formData.completionDate || null,
            projectId: formData.projectId,
            testPlanId: formData.testPlanId || null,
            responsibleId: formData.responsibleId,
          }),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Test run update response:', response.status, errorText);
        throw new Error(
          `Failed to update test run: ${response.status} ${errorText}`
        );
      }
      setSuccess('Тестовый прогон успешно обновлен!');
      setIsEditing(false);
      fetchTestRun();
    } catch (err: any) {
      console.error('Error updating test run:', err);
      setError(err.message || 'Не удалось обновить тестовый прогон.');
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    if (!window.confirm('Вы уверены, что хотите удалить этот тестовый прогон?'))
      return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/test-runs/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          'Test run deletion response:',
          response.status,
          errorText
        );
        throw new Error(
          `Failed to delete test run: ${response.status} ${errorText}`
        );
      }
      setSuccess('Тестовый прогон успешно удален!');
      navigate('/search/test-runs');
    } catch (err: any) {
      console.error('Error deleting test run:', err);
      setError(err.message || 'Не удалось удалить тестовый прогон.');
    }
  };

  const handleStart = async () => {
    if (!id) return;
    try {
      const response = await fetch(
        `http://localhost:5000/api/test-runs/start/${id}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Test run start response:', response.status, errorText);
        throw new Error(
          `Failed to start test run: ${response.status} ${errorText}`
        );
      }
      setSuccess('Тестовый прогон запущен!');
      fetchTestRun();
    } catch (err: any) {
      console.error('Error starting test run:', err);
      setError(err.message || 'Не удалось запустить тестовый прогон.');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!testRun || !formData) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="test-case-container">
      <h2>Тестовый прогон: {testRun.title}</h2>
      {isEditing ? (
        <form id="testRunForm" onSubmit={handleSubmit}>
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
            <label htmlFor="testPlanId">Тест-план</label>
            <select
              id="testPlanId"
              name="testPlanId"
              value={formData.testPlanId || ''}
              onChange={handleChange}
              disabled={!formData.projectId}
            >
              <option value="">Без тест-плана</option>
              {testPlans.map(testPlan => (
                <option key={testPlan.id} value={testPlan.id}>
                  {testPlan.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="responsibleId">Ответственный</label>
            <select
              id="responsibleId"
              name="responsibleId"
              value={formData.responsibleId}
              onChange={handleChange}
              required
              disabled={!formData.projectId}
            >
              <option value={0}>Выберите ответственного</option>
              {members.map(member => (
                <option key={member.userId} value={member.userId}>
                  {member.user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="status">Статус</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="planned">Запланирован</option>
                <option value="in_progress">В процессе</option>
                <option value="completed">Завершен</option>
                <option value="rejected">Отклонен</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="plannedDate">Запланированная дата</label>
              <input
                type="datetime-local"
                id="plannedDate"
                name="plannedDate"
                value={formData.plannedDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="completionDate">Дата завершения</label>
              <input
                type="datetime-local"
                id="completionDate"
                name="completionDate"
                value={formData.completionDate || ''}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="content">Описание</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Введите описание прогона"
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
            <strong>Название:</strong> {testRun.title}
          </p>
          <p>
            <strong>Статус:</strong> {testRun.status}
          </p>
          <p>
            <strong>Запланированная дата:</strong>{' '}
            {new Date(testRun.plannedDate).toLocaleString()}
          </p>
          <p>
            <strong>Дата завершения:</strong>{' '}
            {testRun.completionDate
              ? new Date(testRun.completionDate).toLocaleString()
              : 'Нет'}
          </p>
          <p>
            <strong>Проект:</strong> {testRun.project.name}
          </p>
          <p>
            <strong>Тест-план:</strong> {testRun.testPlan?.name || 'Нет'}
          </p>
          <p>
            <strong>Ответственный:</strong> {testRun.responsible.username}
          </p>
          <p>
            <strong>Описание:</strong> {testRun.content}
          </p>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={handleDelete}>Удалить</button>
          {testRun.status === 'planned' && (
            <button onClick={handleStart}>Запустить</button>
          )}
          <button onClick={() => navigate('/search/test-runs')}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default TestRunDetail;
