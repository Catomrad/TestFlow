import '../styles/TestRun.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

interface TestPlan {
  id: string;
  name: string;
}

interface ProjectMember {
  userId: number;
  user: { username: string };
}

interface TestRunForm {
  title: string;
  content: string;
  status: string;
  plannedDate: string;
  completionDate: string;
  projectId: number;
  testPlanId: string;
  responsibleId: number;
}

const NewTestRun: React.FC = () => {
  const { user, projects, currentProjectId } = useAuth();
  const [formData, setFormData] = useState<TestRunForm>({
    title: '',
    content: '',
    status: 'planned',
    plannedDate: '',
    completionDate: '',
    projectId: currentProjectId && currentProjectId > 0 ? currentProjectId : 0,
    testPlanId: '',
    responsibleId: 0,
  });
  const [testPlans, setTestPlans] = useState<TestPlan[]>([]);
  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (formData.projectId > 0) {
      fetchTestPlans(formData.projectId);
      fetchMembers(formData.projectId);
    } else {
      setTestPlans([]);
      setMembers([]);
      setFormData(prev => ({ ...prev, testPlanId: '', responsibleId: 0 }));
    }
  }, [formData.projectId]);

  const fetchTestPlans = async (projectId: number) => {
    try {
      if (!Number.isInteger(projectId) || projectId <= 0) {
        throw new Error(`Неверный projectId: ${projectId}`);
      }
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Токен авторизации не найден');
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
        throw new Error(
          `Не удалось загрузить тест-планы: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      setTestPlans(data.testPlans);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить тест-планы.');
    }
  };

  const fetchMembers = async (projectId: number) => {
    try {
      if (!Number.isInteger(projectId) || projectId <= 0) {
        throw new Error(`Неверный projectId: ${projectId}`);
      }
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Токен авторизации не найден');
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
        throw new Error(
          `Не удалось загрузить участников: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      if (!data.project || !Array.isArray(data.project.members)) {
        throw new Error('Неверный формат данных проекта или участников');
      }
      const formattedMembers: ProjectMember[] = data.project.members.map(
        (member: any) => ({
          userId: member.user.id,
          user: {
            username: member.user.username,
          },
        })
      );
      setMembers(formattedMembers);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить участников проекта.');
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
      [name]:
        name === 'projectId' || name === 'responsibleId'
          ? parseInt(value) || 0
          : value,
      ...(name === 'projectId' ? { testPlanId: '', responsibleId: 0 } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Вы должны быть авторизованы для создания тестового прогона.');
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
    if (!formData.responsibleId) {
      setError('Выберите ответственного.');
      return;
    }
    if (!formData.plannedDate) {
      setError('Укажите запланированную дату.');
      return;
    }

    const testRunData = {
      ...formData,
      testPlanId: formData.testPlanId || null,
      completionDate: formData.completionDate || null,
    };
    try {
      const response = await fetch('http://localhost:5000/api/test-runs/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(testRunData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Не удалось создать тестовый прогон: ${response.status} ${errorText}`
        );
      }
      setSuccess('Тестовый прогон успешно создан!');
      setFormData({
        title: '',
        content: '',
        status: 'planned',
        plannedDate: '',
        completionDate: '',
        projectId: formData.projectId,
        testPlanId: '',
        responsibleId: 0,
      });
    } catch (err: any) {
      setError(err.message || 'Не удалось создать тестовый прогон.');
    }
  };

  return (
    <div className="test-run-container">
      <h2>Создать тестовый прогон</h2>
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
            placeholder="Введите название прогона"
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
          <label htmlFor="testPlanId">Тест-план</label>
          <select
            id="testPlanId"
            name="testPlanId"
            value={formData.testPlanId}
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
            value={formData.completionDate}
            onChange={handleChange}
          />
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
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Сохранить тестовый прогон</button>
      </form>
    </div>
  );
};

export default NewTestRun;
