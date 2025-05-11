import '../styles/UserPage.css';

import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

const UserPage: React.FC = () => {
  const {
    user,
    projects,
    currentProjectId,
    logout,
    createProject,
    inviteMember,
    removeMember,
    leaveProject,
    updateProject,
    deleteProject,
    setCurrentProject,
  } = useAuth();
  const [invitee, setInvitee] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [inviteeRole, setInviteeRole] = useState<'admin' | 'user'>('user');
  const [newProjectName, setNewProjectName] = useState('');
  const [editProjectId, setEditProjectId] = useState<number | null>(null);
  const [editProjectName, setEditProjectName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!user) return <p className="user-error">Нет данных о пользователе</p>;

  const handleInvite = async () => {
    if (selectedProjectId && invitee) {
      setIsLoading(true);
      try {
        await inviteMember(parseInt(selectedProjectId), invitee, inviteeRole);
        setInvitee('');
        setSelectedProjectId('');
        setInviteeRole('user');
        setError('');
      } catch (err: any) {
        setError(err.message || 'Не удалось пригласить пользователя');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCreateProject = async () => {
    if (newProjectName.trim()) {
      setIsLoading(true);
      try {
        await createProject(newProjectName.trim());
        setNewProjectName('');
        setError('');
      } catch (err: any) {
        setError(err.message || 'Не удалось создать проект');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRemoveMember = async (projectId: number, userId: number) => {
    setIsLoading(true);
    try {
      await removeMember(projectId, userId);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Не удалось удалить участника');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeaveProject = async (projectId: number) => {
    if (window.confirm('Вы уверены, что хотите покинуть проект?')) {
      setIsLoading(true);
      try {
        await leaveProject(projectId);
        setError('');
      } catch (err: any) {
        setError(err.message || 'Не удалось покинуть проект');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEditProject = async (projectId: number) => {
    if (editProjectName.trim()) {
      setIsLoading(true);
      try {
        await updateProject(projectId, editProjectName.trim());
        setEditProjectId(null);
        setEditProjectName('');
        setError('');
      } catch (err: any) {
        setError(err.message || 'Не удалось обновить проект');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleDeleteProject = async (projectId: number) => {
    if (window.confirm('Вы уверены, что хотите удалить проект?')) {
      setIsLoading(true);
      try {
        await deleteProject(projectId);
        setError('');
      } catch (err: any) {
        setError(err.message || 'Не удалось удалить проект');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const startEditing = (project: { id: number; name: string }) => {
    setEditProjectId(project.id);
    setEditProjectName(project.name);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatRole = (role: string) => {
    switch (role) {
      case 'creator':
        return 'Создатель';
      case 'admin':
        return 'Администратор';
      case 'user':
        return 'Пользователь';
      default:
        return role;
    }
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <h1 className="user-title">Имя: {user.username}</h1>
        <button
          onClick={logout}
          className="action-button logout-button"
          disabled={isLoading}
          aria-label="Выйти"
        >
          Выйти
        </button>
      </div>
      <h2 className="user-role">Роль: {formatRole(user.role)}</h2>
      {error && <p className="user-error">{error}</p>}
      <div className="projects-section">
        <h3 className="section-title">Проекты</h3>
        {projects.length === 0 ? (
          <p className="no-projects">Нет проектов</p>
        ) : (
          projects.map(project => {
            const member = project.members.find(m => m.user.id === user.id);
            const isCreator = member?.role === 'creator';
            const isAdmin = member?.role === 'admin';
            const canManageMembers = isCreator || isAdmin;

            return (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  {editProjectId === project.id ? (
                    <div className="form-group edit-group">
                      <input
                        type="text"
                        value={editProjectName}
                        onChange={e => setEditProjectName(e.target.value)}
                        placeholder="Новое название"
                        disabled={isLoading}
                      />
                      <button
                        onClick={() => handleEditProject(project.id)}
                        className={`action-button create-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                        aria-label="Сохранить изменения"
                      >
                        {isLoading ? 'Загрузка...' : 'Сохранить'}
                      </button>
                      <button
                        onClick={() => setEditProjectId(null)}
                        className="action-button cancel-button"
                        disabled={isLoading}
                        aria-label="Отменить редактирование"
                      >
                        Отмена
                      </button>
                    </div>
                  ) : (
                    <>
                      <div>
                        <strong className="project-name">{project.name}</strong>
                        <p className="project-meta">
                          Создан: {formatDate(project.createdAt)}
                        </p>
                      </div>
                      <div className="project-actions">
                        {isCreator && (
                          <>
                            <button
                              onClick={() => startEditing(project)}
                              className="action-button edit-button"
                              disabled={isLoading}
                              aria-label="Редактировать проект"
                            >
                              Редактировать
                            </button>
                            <button
                              onClick={() => handleDeleteProject(project.id)}
                              className={`action-button delete-button ${isLoading ? 'loading' : ''}`}
                              disabled={isLoading}
                              aria-label="Удалить проект"
                            >
                              {isLoading ? 'Загрузка...' : 'Удалить'}
                            </button>
                          </>
                        )}
                        {!isCreator && (
                          <button
                            onClick={() => handleLeaveProject(project.id)}
                            className={`action-button leave-button ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                            aria-label="Покинуть проект"
                          >
                            {isLoading ? 'Загрузка...' : 'Покинуть'}
                          </button>
                        )}
                        <button
                          onClick={() => setCurrentProject(project.id)}
                          className={`action-button select-button ${currentProjectId === project.id ? 'selected' : ''}`}
                          disabled={
                            isLoading || currentProjectId === project.id
                          }
                          aria-label={
                            currentProjectId === project.id
                              ? 'Проект выбран'
                              : 'Выбрать проект'
                          }
                        >
                          {currentProjectId === project.id
                            ? 'Выбран'
                            : 'Выбрать'}
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <ul className="members-list">
                  {project.members.map((member, i) => (
                    <li key={i} className="member-item">
                      <span>
                        {member.user.username} — {formatRole(member.role)}
                      </span>
                      {canManageMembers && member.user.id !== user.id && (
                        <button
                          onClick={() =>
                            handleRemoveMember(project.id, member.user.id)
                          }
                          className={`action-button remove-button ${isLoading ? 'loading' : ''}`}
                          disabled={isLoading}
                          aria-label={`Удалить ${member.user.username} из проекта`}
                        >
                          {isLoading ? 'Загрузка...' : 'Удалить'}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })
        )}
      </div>
      <div className="create-project-section">
        <h3 className="section-title">Создать новый проект</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Название проекта"
            value={newProjectName}
            onChange={e => setNewProjectName(e.target.value)}
            id="new-project-name"
            aria-describedby="new-project-error"
            disabled={isLoading}
          />
          <button
            onClick={handleCreateProject}
            className={`action-button create-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
            aria-label="Создать проект"
          >
            {isLoading ? 'Загрузка...' : 'Создать'}
          </button>
        </div>
      </div>
      <div className="invite-user-section">
        <h3 className="section-title">Пригласить пользователя</h3>
        <div className="form-group invite-group">
          <select
            value={selectedProjectId}
            onChange={e => setSelectedProjectId(e.target.value)}
            id="project-select"
            disabled={isLoading}
          >
            <option value="">Выберите проект</option>
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Логин пользователя"
            value={invitee}
            onChange={e => setInvitee(e.target.value)}
            id="invitee"
            aria-describedby="invitee-error"
            disabled={isLoading}
          />
          <select
            value={inviteeRole}
            onChange={e => setInviteeRole(e.target.value as 'admin' | 'user')}
            disabled={isLoading}
          >
            <option value="admin">Администратор</option>
            <option value="user">Пользователь</option>
          </select>
          <button
            onClick={handleInvite}
            className={`action-button invite-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
            aria-label="Пригласить пользователя"
          >
            {isLoading ? 'Загрузка...' : 'Пригласить'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
