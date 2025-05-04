import React, { createContext, useContext, useState } from 'react';

interface Project {
name: string;
members: string[];
}

interface UserType {
username: string;
role: 'Админ' | 'Пользователь';
projects: string[];
}

interface AuthContextType {
isAuthenticated: boolean;
user: UserType | null;
login: (username: string, password: string) => void;
logout: () => void;
register: (username: string, password: string, role: 'Админ' | 'Пользователь', projectName?: string) => void;
inviteUser: (projectName: string, username: string) => void;
createProject: (projectName: string) => void;
projects: Project[];
usersList: UserType[];

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
const context = useContext(AuthContext);
if (!context) throw new Error('useAuth must be used within AuthProvider');
return context;
};



export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [user, setUser] = useState<UserType | null>(null);
const [users, setUsers] = useState<UserType[]>([]);
const [projects, setProjects] = useState<Project[]>([]);

const login = (username: string, password: string) => {
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    setUser(existingUser);
    setIsAuthenticated(true);
  }
};

const createProject = (projectName: string) => {
  if (!user || user.role !== 'Админ') return;
  const newProject: Project = { name: projectName, members: [user.username] };
  setProjects(prev => [...prev, newProject]);

  // Обновляем пользователя
  setUsers(prev =>
    prev.map(u =>
      u.username === user.username
        ? { ...u, projects: [...u.projects, projectName] }
        : u
    )
  );

  setUser(prev =>
    prev ? { ...prev, projects: [...prev.projects, projectName] } : prev
  );
};


const register = (username: string, password: string, role: 'Админ' | 'Пользователь', projectName?: string) => {
  let userProjects: string[] = [];

  if (role === 'Админ' && projectName) {
    const newProject: Project = { name: projectName, members: [username] };
    setProjects(prev => [...prev, newProject]);
    userProjects = [projectName];
  }

  const newUser: UserType = { username, role, projects: userProjects };
  setUsers(prev => [...prev, newUser]);
  setUser(newUser);
  setIsAuthenticated(true);
};

const inviteUser = (projectName: string, invitedUsername: string) => {
  setProjects(prev =>
    prev.map(p =>
      p.name === projectName && !p.members.includes(invitedUsername)
        ? { ...p, members: [...p.members, invitedUsername] }
        : p
    )
  );

  setUsers(prev =>
    prev.map(u =>
      u.username === invitedUsername && !u.projects.includes(projectName)
        ? { ...u, projects: [...u.projects, projectName] }
        : u
    )
  );

  if (user?.username === invitedUsername) {
    setUser(prev =>
      prev ? { ...prev, projects: [...prev.projects, projectName] } : prev
    );
  }
};

const logout = () => {
  setUser(null);
  setIsAuthenticated(false);
};

return (
  <AuthContext.Provider value={{ 
    isAuthenticated, user, 
    login, logout, 
    register, inviteUser, 
    createProject, projects, 
    usersList: users 
    }}>

    {children}
  </AuthContext.Provider>
);
};
