import '../styles/Search.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface TestCase {
  id: string;
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
  projectId: number;
  creatorId: number;
}

const SearchCases: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [filters, setFilters] = useState({
    title: '',
    priority: '',
    class: '',
    module: '',
    status: '',
    template: '',
    projectId: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setError('You must be logged in to view test cases.');
      return;
    }
    fetchTestCases();
  }, [user]);

  const fetchTestCases = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test-case', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch test cases');
      const data = await response.json();
      setTestCases(data.testCases);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch test cases');
    }
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredTestCases = testCases.filter(tc => {
    return (
      (filters.title === '' ||
        tc.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.priority === '' || tc.priority === filters.priority) &&
      (filters.class === '' || tc.class === filters.class) &&
      (filters.module === '' || tc.module === filters.module) &&
      (filters.status === '' || tc.status === filters.status) &&
      (filters.template === '' || tc.template === filters.template) &&
      (filters.projectId === '' || tc.projectId === parseInt(filters.projectId))
    );
  });

  const handleRowClick = (id: string) => {
    navigate(`/case/${id}`);
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="search-container">
      <h2>Поиск тест-кейсов</h2>
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
          <label htmlFor="priority">Приоритет</label>
          <select
            id="priority"
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
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
            value={filters.class}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
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
            value={filters.module}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
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
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            <option value="draft">Черновик</option>
            <option value="active">Активный</option>
            <option value="closed">Закрыт</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="template">Шаблон</label>
          <select
            id="template"
            name="template"
            value={filters.template}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            <option value="basic">Базовый</option>
            <option value="api">API</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectId">Проект</label>
          <input
            type="number"
            id="projectId"
            name="projectId"
            value={filters.projectId}
            onChange={handleFilterChange}
            placeholder="ID проекта"
          />
        </div>
      </div>
      <table className="search-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Приоритет</th>
            <th>Класс</th>
            <th>Модуль</th>
            <th>Статус</th>
            <th>Шаблон</th>
            <th>Требуемое время</th>
            <th>Проект ID</th>
            <th>Создатель ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredTestCases.map(tc => (
            <tr
              key={tc.id}
              onClick={() => handleRowClick(tc.id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{tc.title}</td>
              <td>{tc.priority}</td>
              <td>{tc.class}</td>
              <td>{tc.module}</td>
              <td>{tc.status}</td>
              <td>{tc.template}</td>
              <td>
                {tc.requiredTime.days}d {tc.requiredTime.hours}h{' '}
                {tc.requiredTime.minutes}m {tc.requiredTime.seconds}s
              </td>
              <td>{tc.projectId}</td>
              <td>{tc.creatorId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchCases;
