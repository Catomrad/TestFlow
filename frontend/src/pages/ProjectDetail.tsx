import '../styles/TestCase.css';

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.tsx';

interface Module {
  id: number;
  name: string;
}

interface Project {
  id: number;
  name: string;
  createdAt: string;
  members: {
    user: { id: number; username: string; role: string };
    role: string;
  }[];
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, inviteMember, removeMember, leaveProject, updateProject } =
    useAuth();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [newModuleName, setNewModuleName] = useState('');
  const [inviteData, setInviteData] = useState({
    username: '',
    role: 'member',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!user || !id) {
      setError('You must be logged in to view this project.');
      return;
    }
    fetchProject();
    fetchModules();
  }, [user, id]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch project');
      const data = await response.json();
      setProject(data.project);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch project');
    }
  };

  const fetchModules = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/module?projectId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch modules');
      const data = await response.json();
      setModules(data.modules);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch modules');
    }
  };

  const handleCreateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModuleName.trim()) {
      setError('Module name is required.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/module/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name: newModuleName, projectId: parseInt(id!) }),
      });
      if (!response.ok) throw new Error('Failed to create module');
      setSuccess('Module created successfully!');
      setNewModuleName('');
      fetchModules();
    } catch (err: any) {
      setError(err.message || 'Failed to create module');
    }
  };

  const handleDeleteModule = async (moduleId: number) => {
    if (!window.confirm('Are you sure you want to delete this module?')) return;
    try {
      const response = await fetch(
        `http://localhost:5000/api/module/${moduleId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to delete module');
      setSuccess('Module deleted successfully!');
      fetchModules();
    } catch (err: any) {
      setError(err.message || 'Failed to delete module');
    }
  };

  const handleInviteMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteData.username.trim()) {
      setError('Username is required.');
      return;
    }
    try {
      await inviteMember(parseInt(id!), inviteData.username, inviteData.role);
      setSuccess('Member invited successfully!');
      setInviteData({ username: '', role: 'member' });
      fetchProject();
    } catch (err: any) {
      setError(err.message || 'Failed to invite member');
    }
  };

  const handleRemoveMember = async (userId: number) => {
    if (!window.confirm('Are you sure you want to remove this member?')) return;
    try {
      await removeMember(parseInt(id!), userId);
      setSuccess('Member removed successfully!');
      fetchProject();
    } catch (err: any) {
      setError(err.message || 'Failed to remove member');
    }
  };

  const handleLeaveProject = async () => {
    if (!window.confirm('Are you sure you want to leave this project?')) return;
    try {
      await leaveProject(parseInt(id!));
      setSuccess('You have left the project!');
      navigate('/projects');
    } catch (err: any) {
      setError(err.message || 'Failed to leave project');
    }
  };

  const handleUpdateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project || !project.name.trim()) {
      setError('Project name is required.');
      return;
    }
    try {
      await updateProject(parseInt(id!), project.name);
      setSuccess('Project updated successfully!');
      fetchProject();
    } catch (err: any) {
      setError(err.message || 'Failed to update project');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-container">
      <h2>Проект: {project.name}</h2>
      <div>
        <form onSubmit={handleUpdateProject}>
          <div className="form-group">
            <label htmlFor="name">Название проекта</label>
            <input
              type="text"
              id="name"
              value={project.name}
              onChange={e => setProject({ ...project, name: e.target.value })}
              required
              maxLength={255}
            />
          </div>
          <button type="submit">Обновить</button>
        </form>
        <p>
          <strong>Создан:</strong>{' '}
          {new Date(project.createdAt).toLocaleDateString()}
        </p>
      </div>

      <h3>Модули</h3>
      <form onSubmit={handleCreateModule}>
        <div className="form-group">
          <label htmlFor="newModuleName">Новый модуль</label>
          <input
            type="text"
            id="newModuleName"
            value={newModuleName}
            onChange={e => setNewModuleName(e.target.value)}
            placeholder="Введите название модуля"
            maxLength={255}
          />
        </div>
        <button type="submit">Добавить модуль</button>
      </form>
      <ul>
        {modules.map(module => (
          <li key={module.id}>
            {module.name}
            <button onClick={() => handleDeleteModule(module.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>

      <h3>Участники</h3>
      <form onSubmit={handleInviteMember}>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            value={inviteData.username}
            onChange={e =>
              setInviteData({ ...inviteData, username: e.target.value })
            }
            placeholder="Введите имя пользователя"
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Роль</label>
          <select
            id="role"
            value={inviteData.role}
            onChange={e =>
              setInviteData({ ...inviteData, role: e.target.value })
            }
          >
            <option value="member">Участник</option>
            <option value="admin">Администратор</option>
          </select>
        </div>
        <button type="submit">Пригласить</button>
      </form>
      <ul>
        {project.members.map(member => (
          <li key={member.user.id}>
            {member.user.username} ({member.role})
            {member.user.id !== user?.id && (
              <button onClick={() => handleRemoveMember(member.user.id)}>
                Удалить
              </button>
            )}
          </li>
        ))}
      </ul>

      <button onClick={handleLeaveProject}>Покинуть проект</button>
      <button onClick={() => navigate('/projects')}>Назад</button>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProjectDetail;
