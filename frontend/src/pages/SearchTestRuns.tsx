import '../styles/Search.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface TestPlan {
  id: string;
  name: string;
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

const SearchTestRuns: React.FC = () => {
  const { user, projects } = useAuth();
  const navigate = useNavigate();
  const [testRuns, setTestRuns] = useState<TestRun[]>([]);
  const [testPlans, setTestPlans] = useState<TestPlan[]>([]);
  const [filters, setFilters] = useState({
    title: '',
    status: '',
    projectId: '',
    testPlanId: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setError('Вы должны быть авторизованы для просмотра тестовых прогонов.');
      return;
    }
    fetchTestRuns();
    fetchTestPlans();
  }, [user]);

  const fetchTestRuns = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test-runs', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch test runs');
      const data = await response.json();
      setTestRuns(data.testRuns);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить тестовые прогоны.');
    }
  };

  const fetchTestPlans = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test-plan', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch test plans');
      const data = await response.json();
      setTestPlans(data.testPlans);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить тест-планы.');
    }
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredTestRuns = testRuns.filter(tr => {
    return (
      (filters.title === '' ||
        tr.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.status === '' || tr.status === filters.status) &&
      (filters.projectId === '' ||
        tr.projectId === parseInt(filters.projectId)) &&
      (filters.testPlanId === '' || tr.testPlanId === filters.testPlanId)
    );
  });

  const handleRowClick = (id: string) => {
    navigate(`/test-runs/${id}`);
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="search-container">
      <h2>Поиск тестовых прогонов</h2>
      <div className="filters">
        <div className="form-group">
          <label htmlFor="title">Название</label>
          <input
            type="text"
            id="title"
            name="title"
            value={filters.title}
            onChange={handleFilterChange}
            placeholder="Введите название"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Статус</label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            <option value="planned">Запланирован</option>
            <option value="in_progress">В процессе</option>
            <option value="completed">Завершен</option>
            <option value="rejected">Отклонен</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectId">Проект</label>
          <select
            id="projectId"
            name="projectId"
            value={filters.projectId}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
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
            value={filters.testPlanId}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            {testPlans.map(testPlan => (
              <option key={testPlan.id} value={testPlan.id}>
                {testPlan.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table className="search-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Статус</th>
            <th>Запланированная дата</th>
            <th>Дата завершения</th>
            <th>Проект</th>
            <th>Тест-план</th>
            <th>Ответственный</th>
          </tr>
        </thead>
        <tbody>
          {filteredTestRuns.map(tr => (
            <tr
              key={tr.id}
              onClick={() => handleRowClick(tr.id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{tr.title}</td>
              <td>{tr.status}</td>
              <td>{new Date(tr.plannedDate).toLocaleString()}</td>
              <td>
                {tr.completionDate
                  ? new Date(tr.completionDate).toLocaleString()
                  : 'Нет'}
              </td>
              <td>{tr.project.name}</td>
              <td>{tr.testPlan?.name || 'Нет'}</td>
              <td>{tr.responsible.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTestRuns;
