import React from 'react';

const projects = new Map([
  ['', 'Не выбран'],
  ['sensorehab', 'SensoRehab'],
  ['testflow', 'TestFlow'],
]);

const modules = new Map([
  ['', 'Не выбран'],
  ['auth', 'Авторизация'],
  ['payments', 'Платежи'],
]);

const listProjects = Array.from(projects).map(([key, value]) => {
  return <option value={key}>{value}</option>;
});

const listModules = Array.from(modules).map(([key, value]) => {
  return <option value={key}>{value}</option>;
});

function ModuleSelector() {
  return (
    <>
      <div className="form-group">
        <label htmlFor="project">Проект</label>
        <select id="project" name="project" required defaultValue={''}>
          {listProjects}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="module">Модуль</label>
        <select id="module" name="module" required defaultValue={''}>
          {listModules}
        </select>
      </div>
    </>
  );
}

export default ModuleSelector;
