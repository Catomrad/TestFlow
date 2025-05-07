import React, { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';

interface User {
  id: number;
  username: string;
  role: 'admin' | 'user';
}

interface Project {
  id: number;
  name: string;
  members: {
    user: { id: number; username: string; role: string };
    role: string;
  }[];
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  projects: Project[];
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    password: string,
    role: 'admin' | 'user',
    projectName?: string
  ) => Promise<void>;
  logout: () => void;
  fetchProjects: () => Promise<void>;
  createProject: (name: string) => Promise<void>;
  inviteUser: (projectId: number, username: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
        setIsAuthenticated(true);
        await fetchProjects();
      } catch (error) {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        setProjects([]);
      }
    }
    setIsLoading(false);
  };

  const fetchProjects = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:5000/api/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const createProject = async (name: string) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');

    try {
      await axios.post(
        'http://localhost:5000/api/projects',
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchProjects();
    } catch (error) {
      throw new Error('Failed to create project');
    }
  };

  const inviteUser = async (projectId: number, username: string) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');

    try {
      await axios.post(
        'http://localhost:5000/api/projects/invite',
        { projectId, username },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchProjects();
    } catch (error) {
      throw new Error('Failed to invite user');
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      username,
      password,
    });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
    setIsAuthenticated(true);
    await fetchProjects();
  };

  const register = async (
    username: string,
    password: string,
    role: 'admin' | 'user',
    projectName?: string
  ) => {
    const response = await axios.post(
      'http://localhost:5000/api/auth/register',
      { username, password, role, projectName }
    );
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
    setIsAuthenticated(true);
    await fetchProjects();
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    setProjects([]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        projects,
        login,
        register,
        logout,
        fetchProjects,
        createProject,
        inviteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
