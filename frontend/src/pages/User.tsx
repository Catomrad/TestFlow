import '../styles/User.css';

import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

const UserPage: React.FC = () => {
  const { user, projects, logout, createProject, inviteUser } = useAuth();
  const [invitee, setInvitee] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [error, setError] = useState('');

  if (!user) return <p className="user-error">Нет данных о пользователе</p>;

  const isAdmin = user.role === 'admin';

  const handleInvite = async () => {
    if (selectedProjectId && invitee) {
      try {
        await inviteUser(parseInt(selectedProjectId), invitee);
        setInvitee('');
        setSelectedProjectId('');
        setError('');
      } catch (err: any) {
        setError(err.message || 'Не удалось пригласить пользователя');
      }
    }
  };

  const handleCreateProject = async () => {
    if (newProjectName.trim()) {
      try {
        await createProject(newProjectName.trim());
        setNewProjectName('');
        setError('');
      } catch (err: any) {
        setError(err.message || 'Не удалось создать проект');
      }
    }
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <h1 className="user-title">Имя: {user.username}</h1>
        <button onClick={logout} className="logout-button">
          Выйти
        </button>
      </div>
      <h2 className="user-role">
        Роль: {user.role === 'admin' ? 'Администратор' : 'Пользователь'}
      </h2>
      {error && <p className="user-error">{error}</p>}
      <div className="projects-section">
        <h3 className="section-title">Проекты</h3>
        {projects.length === 0 ? (
          <p className="no-projects">Нет проектов</p>
        ) : (
          projects.map(project => (
            <div key={project.id} className="project-card">
              <strong className="project-name">{project.name}</strong>
              <ul className="members-list">
                {project.members.map((member, i) => (
                  <li key={i} className="member-item">
                    {member.user.username} — {member.role}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
      {isAdmin && (
        <>
          <div className="create-project-section">
            <h3 className="section-title">Создать новый проект</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="Название проекта"
                value={newProjectName}
                onChange={e => setNewProjectName(e.target.value)}
                className="form-input"
                id="new-project-name"
                aria-describedby="new-project-error"
              />
              <button
                onClick={handleCreateProject}
                className="action-button create-button"
              >
                Создать
              </button>
            </div>
          </div>
          <div className="invite-user-section">
            <h3 className="section-title">Пригласить пользователя</h3>
            <div className="form-group invite-group">
              <select
                value={selectedProjectId}
                onChange={e => setSelectedProjectId(e.target.value)}
                className="form-input"
                id="project-select"
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
                className="form-input"
                id="invitee"
                aria-describedby="invitee-error"
              />
              <button
                onClick={handleInvite}
                className="action-button invite-button"
              >
                Пригласить
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserPage;
