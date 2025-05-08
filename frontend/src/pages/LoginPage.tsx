import '../styles/LoginPage.css';

import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isRegister) {
        await register(username, password);
      } else {
        await login(username, password);
      }
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">{isRegister ? 'Регистрация' : 'Вход'}</h2>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Имя пользователя
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="form-input"
            required
            aria-describedby="username-error"
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-input"
            required
            aria-describedby="password-error"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className={`auth-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
          aria-label={isRegister ? 'Зарегистрироваться' : 'Войти'}
        >
          {isLoading
            ? 'Загрузка...'
            : isRegister
              ? 'Зарегистрироваться'
              : 'Войти'}
        </button>
      </form>
      <button
        onClick={() => setIsRegister(!isRegister)}
        className="auth-toggle"
        disabled={isLoading}
        aria-label={isRegister ? 'Перейти к входу' : 'Перейти к регистрации'}
      >
        {isRegister
          ? 'Уже есть аккаунт? Войти'
          : 'Нет аккаунта? Зарегистрироваться'}
      </button>
    </div>
  );
};

export default LoginPage;
