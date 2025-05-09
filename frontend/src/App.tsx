import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AuthProvider } from './context/AuthContext.tsx';
import CaseDetail from './pages/CaseDetail.tsx';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.tsx';
import NewPlan from './pages/NewPlan.tsx';
import NewTest from './pages/NewTest.tsx';
import PlanDetail from './pages/PlanDetail.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import React from 'react';
import Search from './pages/Search.js';
import SearchCases from './pages/SearchCases.tsx';
import SearchPlans from './pages/SearchPlans.tsx';
import User from './pages/UserPage.tsx';

type PageValue =
  | string
  | {
      main: string;
      submenu: [string, string][];
    };

const PAGES = new Map<string, PageValue>([
  ['Главная', '/'],
  [
    'Создание',
    {
      main: '/case/new',
      submenu: [
        ['Новый кейс', '/case/new'],
        ['Новый план', '/plan/new'],
      ],
    },
  ],
  [
    'Поиск',
    {
      main: '/search/cases',
      submenu: [
        ['Тест-кейс', '/search/cases'],
        ['Тест-план', '/search/plans'],
      ],
    },
  ],
  ['Тестирование', '/'],
  ['Пользователь', '/user'],
]);

function MyHeader() {
  const [submenuVisibility, setSubmenuVisibility] = useState({
    Создание: false,
    Поиск: false,
  });

  const handleMouseEnter = (key: string) => {
    setSubmenuVisibility(prev => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key: string) => {
    setSubmenuVisibility(prev => ({ ...prev, [key]: false }));
  };

  const listPages = Array.from(PAGES).map(([key, value]) => {
    if (typeof value === 'object' && 'main' in value && 'submenu' in value) {
      return (
        <li
          key={key}
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={() => handleMouseLeave(key)}
          className="nav-item-with-submenu"
        >
          <Link to={value.main}>{key}</Link>
          <ul className={`submenu ${submenuVisibility[key] ? 'visible' : ''}`}>
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
    <nav>
      <ul>{listPages}</ul>
    </nav>
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
              <Route path="/case/new" element={<NewTest />} />
              <Route path="/plan/new" element={<NewPlan />} />
              <Route path="/user" element={<User />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/cases" element={<SearchCases />} />
              <Route path="/search/plans" element={<SearchPlans />} />
              <Route path="/case/:id" element={<CaseDetail />} />
              <Route path="/plan/:id" element={<PlanDetail />} />
            </Route>
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
