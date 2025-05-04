import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

function User() {
  const { user, inviteUser, createProject, projects, usersList } = useAuth();
  const [invitee, setInvitee] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [newProjectName, setNewProjectName] = useState('');

  if (!user) return <p>Нет данных о пользователе</p>;

  const handleInvite = () => {
    if (selectedProject && invitee) {
      inviteUser(selectedProject, invitee);
      setInvitee('');
    }
  };

  const handleCreateProject = () => {
    if (newProjectName.trim()) {
      createProject(newProjectName.trim());
      setNewProjectName('');
    }
  };

  return (
    <>
      <h1>Имя пользователя: {user.username}</h1>
      <h2>Статус: {user.role}</h2>

      <div>
        <h3>Проекты:</h3>
        {user.projects.map((projectName, idx) => {
          const project = projects.find(p => p.name === projectName);
          const members = project?.members || [];

          return (
            <div key={idx} style={{ marginBottom: '1em' }}>
              <strong>{projectName}</strong>
              <ul>
                {members.map((m, i) => {
                  const found = usersList.find(u => u.username === m);
                  return (
                    <li key={i}>
                      {m} — {found?.role ?? 'Неизвестно'}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {user.role === 'Админ' && (
        <>
          <div>
            <h3>Создать новый проект</h3>
            <input
              type="text"
              placeholder="Название проекта"
              value={newProjectName}
              onChange={e => setNewProjectName(e.target.value)}
            />
            <button onClick={handleCreateProject}>Создать</button>
          </div>

          <div>
            <h3>Пригласить пользователя</h3>
            <select value={selectedProject} onChange={e => setSelectedProject(e.target.value)}>
              <option value="">Выберите проект</option>
              {user.projects.map((p, idx) => (
                <option key={idx} value={p}>{p}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Логин пользователя"
              value={invitee}
              onChange={e => setInvitee(e.target.value)}
            />
            <button onClick={handleInvite}>Пригласить</button>
          </div>
        </>
      )}
    </>
  );
}

export default User;
