import '../styles/Search.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface TestPlan {
  id: string;
  name: string;
  projectId: number;
  creatorId: number;
}

const SearchPlans: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [testPlans, setTestPlans] = useState<TestPlan[]>([]);
  const [filters, setFilters] = useState({
    name: '',
    projectId: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setError('You must be logged in to view test plans.');
      return;
    }
    fetchTestPlans();
  }, [user]);

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
      setError(err.message || 'Failed to fetch test plans');
    }
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredTestPlans = testPlans.filter(tp => {
    return (
      (filters.name === '' ||
        tp.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.projectId === '' || tp.projectId === parseInt(filters.projectId))
    );
  });

  const handleRowClick = (id: string) => {
    navigate(`/plan/${id}`);
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="search-container">
      <h2>Поиск тест-планов</h2>
      <div className="filters">
        <div className="form-group">
          <label htmlFor="name">Название</label>
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Введите название"
          />
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
            <th>Проект ID</th>
            <th>Создатель ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredTestPlans.map(tp => (
            <tr
              key={tp.id}
              onClick={() => handleRowClick(tp.id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{tp.name}</td>
              <td>{tp.projectId}</td>
              <td>{tp.creatorId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPlans;
