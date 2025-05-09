import '../styles/TestCase.css';

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.tsx';

interface TestPlan {
  id: string;
  name: string;
  description: string;
  projectId: number;
  creatorId: number;
}

const PlanDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [testPlan, setTestPlan] = useState<TestPlan | null>(null);
  const [formData, setFormData] = useState<TestPlan | null>(null);
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
      setFormData(data.testPlan);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch test plan');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          body: JSON.stringify(formData),
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
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={255}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectId">Проект</label>
            <input
              type="number"
              id="projectId"
              name="projectId"
              value={formData.projectId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Описание</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
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
            <strong>Проект ID:</strong> {testPlan.projectId}
          </p>
          <p>
            <strong>Создатель ID:</strong> {testPlan.creatorId}
          </p>
          <p>
            <strong>Описание:</strong> {testPlan.description}
          </p>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={() => navigate('/search/plans')}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default PlanDetail;
