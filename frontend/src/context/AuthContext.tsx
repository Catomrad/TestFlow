import React, { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';

interface User {
     id: number;
     username: string;
     role: 'admin' | 'user';
   }

   interface AuthContextType {
     isAuthenticated: boolean;
     user: User | null;
     login: (username: string, password: string) => Promise<void>;
     register: (username: string, password: string, role: 'admin' | 'user', projectName?: string) => Promise<void>;
     logout: () => void;
   }

   const AuthContext = createContext<AuthContextType | undefined>(undefined);

   export const useAuth = () => {
     const context = useContext(AuthContext);
     if (!context) throw new Error('useAuth must be used within AuthProvider');
     return context;
   };

   export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [user, setUser] = useState<User | null>(null);
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
         } catch (error) {
           localStorage.removeItem('token');
           setUser(null);
           setIsAuthenticated(false);
         }
       }
       setIsLoading(false);
     };

     useEffect(() => {
       checkAuth();
     }, []);

     const login = async (username: string, password: string) => {
       const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
       localStorage.setItem('token', response.data.token);
       setUser(response.data.user);
       setIsAuthenticated(true);
     };

     const register = async (username: string, password: string, role: 'admin' | 'user', projectName?: string) => {
       const response = await axios.post('http://localhost:5000/api/auth/register', { username, password, role, projectName });
       localStorage.setItem('token', response.data.token);
       setUser(response.data.user);
       setIsAuthenticated(true);
     };

     const logout = () => {
       localStorage.removeItem('token');
       setUser(null);
       setIsAuthenticated(false);
     };

     if (isLoading) {
       return <div>Loading...</div>;
     }

     return (
       <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
         {children}
       </AuthContext.Provider>
     );
   };