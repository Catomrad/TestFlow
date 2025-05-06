import { Navigate, Outlet } from 'react-router-dom';

import React from 'react';
import { useAuth } from '../context/AuthContext.tsx';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoute;

