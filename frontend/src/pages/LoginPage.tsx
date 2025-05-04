import '../styles/LoginPage.css'

import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Админ' | 'Пользователь'>('Пользователь');
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      register(username, password, role, role === 'Админ' ? projectName : undefined);
    } else {
      login(username, password);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{isRegister ? 'Регистрация' : 'Вход'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {isRegister && (
          <>
            <label>Тип пользователя:</label>
            <select value={role} onChange={e => setRole(e.target.value as any)}>
              <option value="Админ">Админ</option>
              <option value="Пользователь">Пользователь</option>
            </select>
            {role === 'Админ' && (
              <input
                type="text"
                placeholder="Название проекта"
                value={projectName}
                onChange={e => setProjectName(e.target.value)}
                required
              />
            )}
          </>
        )}
        <button type="submit">{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
      </form>
      <button onClick={() => setIsRegister(prev => !prev)}>
        {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
      </button>
    </div>
  );
};

export default LoginPage;
