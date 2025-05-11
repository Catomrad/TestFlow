import '../styles/TestPlan.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useLocation } from 'react-router-dom';

interface TestCase {
  id: string;
  title: string;
  moduleId?: number;
}

interface TestPlanForm {
  name: string;
  description: string;
  softwareVersion: string;
  projectId: number;
  testCaseIds: string[];
}

const NewPlan: React.FC = () => {
  const { user, projects, currentProjectId, createTestPlan } = useAuth();
  const location = useLocation();
  const [formData, setFormData] = useState<TestPlanForm>({
    name: '',
    description: '',
    softwareVersion: '',
    projectId: currentProjectId || 0,
    testCaseIds: [],
  });
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (location.state) {
      const { projectId, name, testCaseIds } = location.state as {
        projectId?: number;
        name?: string;
        testCaseIds?: string[];
      };
      setFormData(prev => ({
        ...prev,
        projectId: projectId || prev.projectId,
        name: name || prev.name,
        testCaseIds: testCaseIds || prev.testCaseIds,
      }));
    }
  }, [location.state]);

  useEffect(() => {
    if (formData.projectId) {
      fetchTestCases(formData.projectId);
    }
  }, [formData.projectId]);

  const fetchTestCases = async (projectId: number) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Токен авторизации не найден');
      const response = await fetch(
        `http://localhost:5000/api/test-case?projectId=${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Не удалось загрузить тест-кейсы: ${response.status} ${errorText}`
        );
      }
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
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projectId' ? parseInt(value) : value,
    }));
  };

  const handleTestCaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      option => (option as HTMLOptionElement).value
    );
    setFormData(prev => ({ ...prev, testCaseIds: selectedOptions }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Вы должны быть авторизованы для создания тест-плана.');
      return;
    }
    if (!formData.projectId) {
      setError('Выберите проект.');
      return;
    }
    if (!formData.name.trim()) {
      setError('Название обязательно.');
      return;
    }

    try {
      await createTestPlan(
        formData.name,
        formData.description,
        formData.projectId,
        formData.softwareVersion,
        formData.testCaseIds
      );
      setSuccess('Тест-план успешно создан!');
      setFormData({
        name: '',
        description: '',
        softwareVersion: '',
        projectId: formData.projectId,
        testCaseIds: [],
      });
    } catch (err: any) {
      setError(err.message || 'Не удалось создать тест-план.');
    }
  };

  return (
    <div className="test-plan-container">
      <h2>Создать тест-план</h2>
      <form id="testPlanForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Название</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={255}
            placeholder="Введите название тест-плана"
          />
        </div>
        <div className="form-group">
          <label htmlFor="softwareVersion">Версия ПО</label>
          <input
            type="text"
            name="softwareVersion"
            id="softwareVersion"
            value={formData.softwareVersion}
            onChange={handleChange}
            placeholder="Введите версию ПО"
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
          <label htmlFor="testCases">Тест-кейсы</label>
          <select
            id="testCases"
            name="testCases"
            multiple
            value={formData.testCaseIds}
            onChange={handleTestCaseChange}
          >
            {testCases.map(testCase => (
              <option key={testCase.id} value={testCase.id}>
                {testCase.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Описание</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Введите описание тест-плана"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Создать тест-план</button>
      </form>
    </div>
  );
};

export default NewPlan;
