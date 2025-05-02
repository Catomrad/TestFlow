import './App.css';

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import NewPlan from './pages/New-plan';
import NewTest from './pages/New-test';
import Search from './pages/Search';
import User from './pages/User';

let PAGES = new Map([
  ["Главная", '/'],
  ["Тестирование", {
    main: 'cases/new',
    submenu: [
      ["Новый кейс", "/cases/new"],
      ["Новый план", "/plan/new"]
    ]
  }],
  ["Поиск", '/search'],
  ["Пользователь", '/user'],
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
    if (key === "Тестирование") {
      return (
        <li key={key} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="nav-item-with-submenu">
          <Link to={value.main}>{key}</Link>
          {showSubmenu && (
            <ul className="submenu">
              {value.submenu.map(([subName, subPath]) => (
                <li key={subPath}>
                  <Link to={subPath}>{subName}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }
    return (
      <li key={key}><Link to={value}>{key}</Link></li>
    );
  });
  
  return (
    <>
      <nav>
        <ul>
          {listPages}
        </ul>
      </nav>
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "TestFlow";
  }, []);

  return (
    <Router>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases/new" element={<NewTest />} />
          <Route path="/plan/new" element={<NewPlan />} />
          <Route path="/user" element={<User />} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
