import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import axios from 'axios';

interface User {
  id: number;
  username: string;
  role: string;
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

interface TestCaseForm {
  title: string;
  priority: string;
  class: string;
  moduleId: number;
  status: string;
  template: string;
  requiredTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  content: string;
  description: string;
  projectId: number;
  creatorId: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  projects: Project[];
  currentProjectId: number | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
  fetchProjects: () => Promise<void>;
  createProject: (name: string) => Promise<void>;
  createTestPlan: (
    name: string,
    description: string,
    projectId: number,
    softwareVersion?: string,
    testCaseIds?: string[]
  ) => Promise<void>;
  createTestCase: (testCase: TestCaseForm) => Promise<void>;
  inviteMember: (
    projectId: number,
    username: string,
    role: string
  ) => Promise<void>;
  removeMember: (projectId: number, userId: number) => Promise<void>;
  leaveProject: (projectId: number) => Promise<void>;
  updateProject: (projectId: number, name: string) => Promise<void>;
  deleteProject: (projectId: number) => Promise<void>;
  setCurrentProject: (projectId: number | null) => void;
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
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const checkAuth = async (token: string) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
      setIsAuthenticated(true);
      await fetchProjects();
    } catch (error: any) {
      console.error('Failed to check auth:', error);
      localStorage.removeItem('token');
      setUser(null);
      setIsAuthenticated(false);
      setProjects([]);
      setCurrentProjectId(null);
    }
  };

  const fetchProjects = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:5000/api/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(response.data.projects);
      if (
        currentProjectId &&
        !response.data.projects.some((p: Project) => p.id === currentProjectId)
      ) {
        console.log('Current project not found, resetting currentProjectId');
        setCurrentProjectId(null);
      }
    } catch (error: any) {
      console.error('Failed to fetch projects:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isInitialized) {
      checkAuth(token).then(() => {
        setIsInitialized(true);
      });
    } else {
      setIsInitialized(true);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          username,
          password,
        }
      );
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
      await fetchProjects();
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const register = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        {
          username,
          password,
        }
      );
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
      await fetchProjects();
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Register failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    setProjects([]);
    setCurrentProjectId(null);
    setIsInitialized(false);
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
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to create project'
      );
    }
  };

  const createTestPlan = async (
    name: string,
    description: string,
    projectId: number,
    softwareVersion?: string,
    testCaseIds?: string[]
  ) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');
    if (!user) throw new Error('No user');

    try {
      await axios.post(
        'http://localhost:5000/api/test-plan/new',
        {
          name,
          description,
          softwareVersion,
          projectId,
          creatorId: user.id,
          testCaseIds,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to create test plan'
      );
    }
  };

  const createTestCase = async (testCase: TestCaseForm) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');
    if (!user) throw new Error('No user');

    try {
      await axios.post(
        'http://localhost:5000/api/test-case/new',
        {
          title: testCase.title,
          priority: testCase.priority,
          class: testCase.class,
          moduleId: testCase.moduleId,
          status: testCase.status,
          template: testCase.template,
          requiredTime: testCase.requiredTime,
          content: testCase.content,
          description: testCase.description,
          projectId: testCase.projectId,
          creatorId: user.id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to create test case'
      );
    }
  };

  const inviteMember = async (
    projectId: number,
    username: string,
    role: string
  ) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');

    try {
      await axios.post(
        'http://localhost:5000/api/projects/invite-member',
        { projectId, username, role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchProjects();
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to invite user');
    }
  };

  const removeMember = async (projectId: number, userId: number) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');

    try {
      await axios.post(
        'http://localhost:5000/api/projects/remove-member',
        { projectId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchProjects();
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to remove member'
      );
    }
  };

  const leaveProject = async (projectId: number) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');

    try {
      await axios.post(
        'http://localhost:5000/api/projects/leave',
        { projectId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchProjects();
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to leave project'
      );
    }
  };

  const updateProject = async (projectId: number, name: string) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');
    if (!projectId) throw new Error('Project ID is required');

    try {
      await axios.patch(
        `http://localhost:5000/api/projects/${projectId}`,
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchProjects();
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to update project'
      );
    }
  };

  const deleteProject = async (projectId: number) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token');
    if (!projectId) throw new Error('Project ID is required');

    try {
      await axios.delete(`http://localhost:5000/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchProjects();
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to delete project'
      );
    }
  };

  const setCurrentProject = (projectId: number | null) => {
    console.log('setCurrentProject called with projectId:', projectId);
    if (
      projectId !== null &&
      (!Number.isInteger(projectId) || projectId <= 0)
    ) {
      console.error('Invalid projectId:', projectId);
      return;
    }
    setCurrentProjectId(projectId);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      projects,
      currentProjectId,
      login,
      register,
      logout,
      fetchProjects,
      createProject,
      createTestPlan,
      createTestCase,
      inviteMember,
      removeMember,
      leaveProject,
      updateProject,
      deleteProject,
      setCurrentProject,
    }),
    [isAuthenticated, user, projects, currentProjectId]
  );

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
