import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AuthProvider } from './context/AuthContext.tsx';
import BugReportDetail from './pages/BugReportDetail.tsx';
import CaseDetail from './pages/CaseDetail.tsx';
import Diagrams from './pages/Diagrams.tsx';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.tsx';
import NewBugReport from './pages/NewBugReport.tsx';
import NewPlan from './pages/NewPlan.tsx';
import NewTest from './pages/NewCase.tsx';
import NewTestRun from './pages/NewTestRun.tsx';
import PlanDetail from './pages/PlanDetail.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import Projects from './pages/Projects.tsx';
import React from 'react';
import SearchBugReports from './pages/SearchBugReports.tsx';
import SearchCases from './pages/SearchCases.tsx';
import SearchPlans from './pages/SearchPlans.tsx';
import SearchTestRuns from './pages/SearchTestRuns.tsx';
import TestRunDetail from './pages/TestRunDetail.tsx';
import TestRuns from './pages/TestRuns.tsx';
import User from './pages/UserPage.tsx';
import Webhooks from './pages/Webhooks.tsx';

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
        ['Новый баг-репорт', '/bug-report/new'],
        ['Новый тестовый прогон', '/test-run/new'],
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
        ['Баг-репорт', '/search/bug-reports'],
        ['Тестовый прогон', '/search/test-runs'],
      ],
    },
  ],
  ['Проекты', '/projects'],
  ['Тестирование', '/test-runs'],
  ['Диаграммы', '/diagrams'],
  ['Вебхуки', '/webhooks'],
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
              <Route path="/" element={<Diagrams />} />
              <Route path="/case/new" element={<NewTest />} />
              <Route path="/plan/new" element={<NewPlan />} />
              <Route path="/bug-report/new" element={<NewBugReport />} />
              <Route path="/test-run/new" element={<NewTestRun />} />
              <Route path="/user" element={<User />} />
              <Route path="/search/cases" element={<SearchCases />} />
              <Route path="/search/plans" element={<SearchPlans />} />
              <Route
                path="/search/bug-reports"
                element={<SearchBugReports />}
              />
              <Route path="/test-runs" element={<TestRuns />} />
              <Route path="/search/test-runs" element={<SearchTestRuns />} />
              <Route path="/case/:id" element={<CaseDetail />} />
              <Route path="/plan/:id" element={<PlanDetail />} />
              <Route path="/bug-report/:id" element={<BugReportDetail />} />
              <Route path="/test-runs/:id" element={<TestRunDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/diagrams" element={<Diagrams />} />
              <Route path="/webhooks" element={<Webhooks />} />
            </Route>
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
