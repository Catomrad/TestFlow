import '../styles/Search.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface TestCase {
  id: string;
  title: string;
}

interface BugReport {
  id: string;
  title: string;
  environment: string;
  version: string;
  priority: string;
  frequency: string;
  content: string;
  template: string;
  projectId: number;
  project: { name: string };
  creatorId: number;
  creator: { username: string };
  testCaseId: string | null;
  testCase: { title: string } | null;
}

const SearchBugReports: React.FC = () => {
  const { user, projects } = useAuth();
  const navigate = useNavigate();
  const [bugReports, setBugReports] = useState<BugReport[]>([]);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [filters, setFilters] = useState({
    title: '',
    environment: '',
    priority: '',
    frequency: '',
    template: '',
    projectId: '',
    testCaseId: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setError('Вы должны быть авторизованы для просмотра баг-репортов.');
      return;
    }
    fetchBugReports();
    fetchTestCases();
  }, [user]);

  const fetchBugReports = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bug-reports', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch bug reports');
      const data = await response.json();
      setBugReports(data.bugReports);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить баг-репорты.');
    }
  };

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
      setError(err.message || 'Не удалось загрузить тест-кейсы.');
    }
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredBugReports = bugReports.filter(br => {
    return (
      (filters.title === '' ||
        br.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.environment === '' || br.environment === filters.environment) &&
      (filters.priority === '' || br.priority === filters.priority) &&
      (filters.frequency === '' || br.frequency === filters.frequency) &&
      (filters.template === '' || br.template === filters.template) &&
      (filters.projectId === '' ||
        br.projectId === parseInt(filters.projectId)) &&
      (filters.testCaseId === '' || br.testCaseId === filters.testCaseId)
    );
  });

  const handleRowClick = (id: string) => {
    navigate(`/bug-report/${id}`);
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="search-container">
      <h2>Поиск баг-репортов</h2>
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
          <label htmlFor="environment">Окружение</label>
          <select
            id="environment"
            name="environment"
            value={filters.environment}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            <option value="windows">Windows</option>
            <option value="linux">Linux</option>
            <option value="android">Android</option>
            <option value="ios">iOS</option>
          </select>
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
          <label htmlFor="frequency">Частота</label>
          <select
            id="frequency"
            name="frequency"
            value={filters.frequency}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            <option value="always">Всегда</option>
            <option value="very_often">Очень часто</option>
            <option value="often">Часто</option>
            <option value="rarely">Редко</option>
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
            <option value="detailed">Детальный</option>
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
          <label htmlFor="testCaseId">Тест-кейс</label>
          <select
            id="testCaseId"
            name="testCaseId"
            value={filters.testCaseId}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            {testCases.map(testCase => (
              <option key={testCase.id} value={testCase.id}>
                {testCase.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table className="search-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Окружение</th>
            <th>Версия</th>
            <th>Приоритет</th>
            <th>Частота</th>
            <th>Шаблон</th>
            <th>Проект</th>
            <th>Тест-кейс</th>
            <th>Создатель</th>
          </tr>
        </thead>
        <tbody>
          {filteredBugReports.map(br => (
            <tr
              key={br.id}
              onClick={() => handleRowClick(br.id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{br.title}</td>
              <td>{br.environment}</td>
              <td>{br.version}</td>
              <td>{br.priority}</td>
              <td>{br.frequency}</td>
              <td>{br.template}</td>
              <td>{br.project.name}</td>
              <td>{br.testCase?.title || 'Нет'}</td>
              <td>{br.creator.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBugReports;
