import '../styles/ProjectDetail.css';

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
      setError('Вы должны быть авторизованы для просмотра проекта.');
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
      if (!response.ok) throw new Error('Не удалось загрузить проект');
      const data = await response.json();
      setProject(data.project);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить проект');
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
      if (!response.ok) throw new Error('Не удалось загрузить модули');
      const data = await response.json();
      setModules(data.modules);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить модули');
    }
  };

  const handleCreateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModuleName.trim()) {
      setError('Название модуля обязательно.');
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
      if (!response.ok) throw new Error('Не удалось создать модуль');
      setSuccess('Модуль успешно создан!');
      setNewModuleName('');
      fetchModules();
    } catch (err: any) {
      setError(err.message || 'Не удалось создать модуль');
    }
  };

  const handleDeleteModule = async (moduleId: number) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот модуль?')) return;
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
      if (!response.ok) throw new Error('Не удалось удалить модуль');
      setSuccess('Модуль успешно удален!');
      fetchModules();
    } catch (err: any) {
      setError(err.message || 'Не удалось удалить модуль');
    }
  };

  const handleInviteMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteData.username.trim()) {
      setError('Имя пользователя обязательно.');
      return;
    }
    try {
      await inviteMember(parseInt(id!), inviteData.username, inviteData.role);
      setSuccess('Участник успешно приглашен!');
      setInviteData({ username: '', role: 'member' });
      fetchProject();
    } catch (err: any) {
      setError(err.message || 'Не удалось пригласить участника');
    }
  };

  const handleRemoveMember = async (userId: number) => {
    if (!window.confirm('Вы уверены, что хотите удалить этого участника?'))
      return;
    try {
      await removeMember(parseInt(id!), userId);
      setSuccess('Участник успешно удален!');
      fetchProject();
    } catch (err: any) {
      setError(err.message || 'Не удалось удалить участника');
    }
  };

  const handleLeaveProject = async () => {
    if (!window.confirm('Вы уверены, что хотите покинуть этот проект?')) return;
    try {
      await leaveProject(parseInt(id!));
      setSuccess('Вы покинули проект!');
      navigate('/projects');
    } catch (err: any) {
      setError(err.message || 'Не удалось покинуть проект');
    }
  };

  const handleUpdateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project || !project.name.trim()) {
      setError('Название проекта обязательно.');
      return;
    }
    try {
      await updateProject(parseInt(id!), project.name);
      setSuccess('Проект успешно обновлен!');
      fetchProject();
    } catch (err: any) {
      setError(err.message || 'Не удалось обновить проект');
    }
  };

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!project) {
    return <div className="project-detail-container">Загрузка...</div>;
  }

  return (
    <div className="project-detail-container">
      <h2>Проект: {project.name}</h2>
      <div className="project-info">
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
              placeholder="Введите название проекта"
            />
          </div>
          <button type="submit">Обновить</button>
        </form>
        <p>
          <strong>Создан:</strong>{' '}
          {new Date(project.createdAt).toLocaleDateString('ru-RU')}
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
      <ul className="module-list">
        {modules.length === 0 ? (
          <li>Нет модулей</li>
        ) : (
          modules.map(module => (
            <li key={module.id}>
              {module.name}
              <button
                className="delete-button"
                onClick={() => handleDeleteModule(module.id)}
              >
                Удалить
              </button>
            </li>
          ))
        )}
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
      <ul className="member-list">
        {project.members.map(member => (
          <li key={member.user.id}>
            {member.user.username} ({member.role})
            {member.user.id !== user?.id && (
              <button
                className="delete-button"
                onClick={() => handleRemoveMember(member.user.id)}
              >
                Удалить
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className="button-group">
        <button className="leave-button" onClick={handleLeaveProject}>
          Покинуть проект
        </button>
        <button className="back-button" onClick={() => navigate('/projects')}>
          Назад
        </button>
      </div>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ProjectDetail;
