import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AuthProvider } from './context/AuthContext.tsx';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.tsx';
import NewPlan from './pages/NewPlan.tsx';
import NewTest from './pages/NewTest.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import React from 'react';
import Search from './pages/Search.js';
import User from './pages/UserPage.tsx';

let PAGES = new Map([
  ['Главная', '/'],
  [
    'Создание',
    {
      main: 'cases/new',
      submenu: [
        ['Новый кейс', '/cases/new'],
        ['Новый план', '/plan/new'],
      ],
    },
  ],
  ['Поиск', '/search'],
  ['Тестирование', '/'],
  ['Пользователь', '/user'],
]);

function MyHeader() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  const listPages = Array.from(PAGES).map(([key, value]) => {
    if (key === 'Создание') {
      return (
        <li
          key={key}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="nav-item-with-submenu"
        >
          <Link to={value.main}>{key}</Link>
          <ul className={`submenu ${showSubmenu ? 'visible' : ''}`}>
            {value.submenu.map(([subName, subPath]) => (
              <li key={subPath}>
                <Link to={subPath}>{subName}</Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }
    return (
      <li key={key}>
        <Link to={value}>{key}</Link>
      </li>
    );
  });

  return (
    <>
      <nav>
        <ul>{listPages}</ul>
      </nav>
    </>
  );
}

function MyFooter() {
  return <footer style={{ height: '30px' }}></footer>;
}

function App() {
  useEffect(() => {
    document.title = 'TestFlow';
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <MyHeader />
          <Routes>
            <Route path="/auth" element={<LoginPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/cases/new" element={<NewTest />} />
              <Route path="/plan/new" element={<NewPlan />} />
              <Route path="/user" element={<User />} />
              <Route path="/search" element={<Search />} />
            </Route>
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
