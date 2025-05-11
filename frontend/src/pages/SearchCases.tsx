import '../styles/SearchCase.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface Module {
  id: number;
  name: string;
}

interface TestCase {
  id: string;
  title: string;
  priority: string;
  class: string;
  moduleId: number;
  module: { name: string };
  status: string;
  template: string;
  requiredTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  projectId: number;
  project: { name: string };
  creatorId: number;
  creator: { username: string };
}

const SearchCases: React.FC = () => {
  const { user, projects } = useAuth();
  const navigate = useNavigate();
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [filters, setFilters] = useState({
    title: '',
    priority: '',
    class: '',
    moduleId: '',
    status: '',
    template: '',
    projectId: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setError('Вы должны быть авторизованы для просмотра тест-кейсов.');
      return;
    }
    fetchTestCases();
    fetchModules();
  }, [user]);

  const fetchTestCases = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test-case', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Не удалось загрузить тест-кейсы');
      const data = await response.json();
      setTestCases(data.testCases);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить тест-кейсы');
    }
  };

  const fetchModules = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/module', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Не удалось загрузить модули');
      const data = await response.json();
      setModules(data.modules);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить модули');
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
      (filters.moduleId === '' || tc.moduleId === parseInt(filters.moduleId)) &&
      (filters.status === '' || tc.status === filters.status) &&
      (filters.template === '' || tc.template === filters.template) &&
      (filters.projectId === '' || tc.projectId === parseInt(filters.projectId))
    );
  });

  const handleRowClick = (id: string) => {
    navigate(`/case/${id}`);
  };

  const handleCreateNewCase = () => {
    navigate('/case/new');
  };

  const handleBack = () => {
    navigate('/');
  };

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="search-container">
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
      <div className="filters">
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
          <label htmlFor="moduleId">Модуль</label>
          <select
            id="moduleId"
            name="moduleId"
            value={filters.moduleId}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            {modules.map(module => (
              <option key={module.id} value={module.id}>
                {module.name}
              </option>
            ))}
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
            <th>Проект</th>
            <th>Создатель</th>
          </tr>
        </thead>
        <tbody>
          {filteredTestCases.map(tc => (
            <tr key={tc.id} onClick={() => handleRowClick(tc.id)}>
              <td>{tc.title}</td>
              <td>{tc.priority}</td>
              <td>{tc.class}</td>
              <td>{tc.module.name}</td>
              <td>{tc.status}</td>
              <td>{tc.template}</td>
              <td>
                {tc.requiredTime.days}d {tc.requiredTime.hours}h{' '}
                {tc.requiredTime.minutes}m {tc.requiredTime.seconds}s
              </td>
              <td>{tc.project.name}</td>
              <td>{tc.creator.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchCases;
