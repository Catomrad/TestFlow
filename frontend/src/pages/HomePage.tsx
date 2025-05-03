import React from 'react';
import { useAuth } from '../context/AuthContext.tsx';

const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Домашняя страница</h1>
      <br />
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default HomePage;
