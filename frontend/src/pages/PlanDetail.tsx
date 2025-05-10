import '../styles/TestCase.css';

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.tsx';

interface TestCase {
  id: string;
  title: string;
}

interface TestPlan {
  id: string;
  name: string;
  description: string;
  softwareVersion?: string;
  projectId: number;
  project: { name: string };
  creatorId: number;
  creator: { username: string };
  testCases: { testCase: TestCase }[];
}

const PlanDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, projects } = useAuth();
  const navigate = useNavigate();
  const [testPlan, setTestPlan] = useState<TestPlan | null>(null);
  const [formData, setFormData] = useState<Partial<TestPlan> | null>(null);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user || !id) {
      setError('You must be logged in to view this test plan.');
      return;
    }
    fetchTestPlan();
  }, [user, id]);

  const fetchTestPlan = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/test-plan/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch test plan');
      const data = await response.json();
      setTestPlan(data.testPlan);
      setFormData({
        ...data.testPlan,
        testCaseIds: data.testPlan.testCases.map(
          (tc: { testCase: TestCase }) => tc.testCase.id
        ),
      });
      fetchTestCases(data.testPlan.projectId);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch test plan');
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
      setError(err.message || 'Failed to fetch test cases');
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
          }
        : null
    );
  };

  const handleTestCaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      option => (option as HTMLOptionElement).value
    );
    setFormData(prev =>
      prev ? { ...prev, testCaseIds: selectedOptions } : null
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData || !id) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/test-plan/edit/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            name: formData.name,
            description: formData.description,
            softwareVersion: formData.softwareVersion,
            projectId: formData.projectId,
            testCaseIds: formData.testCaseIds,
          }),
        }
      );
      if (!response.ok) throw new Error('Failed to update test plan');
      setSuccess('Test plan updated successfully!');
      setIsEditing(false);
      fetchTestPlan();
    } catch (err: any) {
      setError(err.message || 'Failed to update test plan');
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this test plan?'))
      return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/test-plan/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to delete test plan');
      setSuccess('Test plan deleted successfully!');
      navigate('/search/plans');
    } catch (err: any) {
      setError(err.message || 'Failed to delete test plan');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!testPlan || !formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="test-plan-container">
      <h2>Тест-план: {testPlan.name}</h2>
      {isEditing ? (
        <form id="testPlanForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Название</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
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
              value={formData.projectId || ''}
              onChange={handleChange}
              required
            >
              <option value="">Выберите проект</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="softwareVersion">Версия ПО</label>
            <input
              type="text"
              id="softwareVersion"
              name="softwareVersion"
              value={formData.softwareVersion || ''}
              onChange={handleChange}
              placeholder="Введите версию ПО"
            />
          </div>
          <div className="form-group">
            <label htmlFor="testCases">Тест-кейсы</label>
            <select
              id="testCases"
              name="testCases"
              multiple
              value={formData.testCaseIds || []}
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
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              placeholder="Введите описание тест-плана"
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
            <strong>Название:</strong> {testPlan.name}
          </p>
          <p>
            <strong>Проект:</strong> {testPlan.project.name}
          </p>
          <p>
            <strong>Создатель:</strong> {testPlan.creator.username}
          </p>
          <p>
            <strong>Версия ПО:</strong>{' '}
            {testPlan.softwareVersion || 'Не указана'}
          </p>
          <p>
            <strong>Тест-кейсы:</strong>
          </p>
          <ul>
            {testPlan.testCases.length > 0 ? (
              testPlan.testCases.map(tc => (
                <li key={tc.testCase.id}>{tc.testCase.title}</li>
              ))
            ) : (
              <li>Нет тест-кейсов</li>
            )}
          </ul>
          <p>
            <strong>Описание:</strong> {testPlan.description}
          </p>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={() => navigate('/search/plans')}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default PlanDetail;
