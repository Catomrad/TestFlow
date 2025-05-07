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
  const [role, setRole] = useState<'admin' | 'user'>('user');
  const [projectName, setProjectName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(
          username,
          password,
          role,
          role === 'admin' ? projectName : undefined
        );
      } else {
        await login(username, password);
      }
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">
        {isRegister ? 'Create Account' : 'Sign In'}
      </h2>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="form-input"
            required
            aria-describedby="username-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-input"
            required
            aria-describedby="password-error"
          />
        </div>
        {isRegister && (
          <>
            <div className="form-group">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={e => setRole(e.target.value as 'admin' | 'user')}
                className="form-input"
              >
                <option value="admin">Administrator</option>
                <option value="user">User</option>
              </select>
            </div>
            {role === 'admin' && (
              <div className="form-group">
                <label htmlFor="projectName" className="form-label">
                  Project Name
                </label>
                <input
                  id="projectName"
                  type="text"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            )}
          </>
        )}
        <button type="submit" className="auth-button">
          {isRegister ? 'Create Account' : 'Sign In'}
        </button>
      </form>
      <button
        onClick={() => setIsRegister(!isRegister)}
        className="auth-toggle"
      >
        {isRegister
          ? 'Already have an account? Sign In'
          : 'Need an account? Register'}
      </button>
    </div>
  );
};

export default LoginPage;
