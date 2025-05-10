import '../styles/Search.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  name: string;
  createdAt: string;
  members: {
    user: { id: number; username: string; role: string };
    role: string;
  }[];
}

const Projects: React.FC = () => {
  const { user, projects, createProject } = useAuth();
  const navigate = useNavigate();
  const [newProjectName, setNewProjectName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setError('You must be logged in to view projects.');
    }
  }, [user]);

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) {
      setError('Project name is required.');
      return;
    }
    try {
      await createProject(newProjectName);
      setSuccess('Project created successfully!');
      setNewProjectName('');
    } catch (err: any) {
      setError(err.message || 'Failed to create project');
    }
  };

  const handleRowClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="search-container">
      <h2>Проекты</h2>
      <form onSubmit={handleCreateProject}>
        <div className="form-group">
          <label htmlFor="newProjectName">Новый проект</label>
          <input
            type="text"
            id="newProjectName"
            value={newProjectName}
            onChange={e => setNewProjectName(e.target.value)}
            placeholder="Введите название проекта"
            maxLength={255}
          />
        </div>
        <button type="submit">Создать проект</button>
      </form>
      <table className="search-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Дата создания</th>
            <th>Участники</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr
              key={project.id}
              onClick={() => handleRowClick(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{project.name}</td>
              <td>{new Date(project.createdAt).toLocaleDateString()}</td>
              <td>{project.members.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Projects;
