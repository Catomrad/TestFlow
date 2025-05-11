import '../styles/TestCase.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface TestRun {
  id: string;
  title: string;
  status: string;
  plannedDate: string;
  completionDate: string | null;
  project: { name: string };
  responsible: { username: string };
}

const TestRuns: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [testRuns, setTestRuns] = useState<TestRun[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setError('Вы должны быть авторизованы для просмотра тестовых прогонов.');
      return;
    }
    fetchTestRuns();
  }, [user]);

  const fetchTestRuns = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authorization token found');
      }
      const response = await fetch('http://localhost:5000/api/test-runs', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Test runs response:', response.status, errorText);
        throw new Error(
          `Failed to fetch test runs: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      console.log('Test runs fetched:', data.testRuns);
      setTestRuns(data.testRuns);
    } catch (err: any) {
      console.error('Error fetching test runs:', err);
      setError(err.message || 'Не удалось загрузить тестовые прогоны.');
    }
  };

  const handleStart = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authorization token found');
      }
      const response = await fetch(
        `http://localhost:5000/api/test-runs/start/${id}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Start test run response:', response.status, errorText);
        throw new Error(
          `Failed to start test run: ${response.status} ${errorText}`
        );
      }
      setSuccess('Тестовый прогон успешно запущен!');
      fetchTestRuns();
    } catch (err: any) {
      console.error('Error starting test run:', err);
      setError(err.message || 'Не удалось запустить тестовый прогон.');
    }
  };

  const handleComplete = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authorization token found');
      }
      const response = await fetch(
        `http://localhost:5000/api/test-runs/complete/${id}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          'Complete test run response:',
          response.status,
          errorText
        );
        throw new Error(
          `Failed to complete test run: ${response.status} ${errorText}`
        );
      }
      setSuccess('Тестовый прогон успешно завершен!');
      fetchTestRuns();
    } catch (err: any) {
      console.error('Error completing test run:', err);
      setError(err.message || 'Не удалось завершить тестовый прогон.');
    }
  };

  return (
    <div className="test-case-container">
      <h2>Тестовые прогоны</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Проект</th>
            <th>Статус</th>
            <th>Запланированная дата</th>
            <th>Дата завершения</th>
            <th>Ответственный</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {testRuns.map(testRun => (
            <tr key={testRun.id}>
              <td>{testRun.title}</td>
              <td>{testRun.project.name}</td>
              <td>{testRun.status}</td>
              <td>{new Date(testRun.plannedDate).toLocaleString()}</td>
              <td>
                {testRun.completionDate
                  ? new Date(testRun.completionDate).toLocaleString()
                  : 'Нет'}
              </td>
              <td>{testRun.responsible.username}</td>
              <td>
                <button
                  onClick={() => navigate(`/test-runs/${testRun.id}`)}
                  style={{ marginRight: '5px' }}
                >
                  Подробности
                </button>
                {testRun.status === 'planned' && (
                  <button
                    onClick={() => handleStart(testRun.id)}
                    style={{ marginRight: '5px' }}
                  >
                    Запустить
                  </button>
                )}
                {testRun.status === 'in_progress' && (
                  <button onClick={() => handleComplete(testRun.id)}>
                    Завершить
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestRuns;
