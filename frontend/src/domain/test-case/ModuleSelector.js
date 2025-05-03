import React from "react"

const modules = new Map([
    ["", "Не выбран"],
    ["auth", "Авторизация"],
    ["payments", "Платежи"],
]);

const listModules = Array.from(modules).map(([key, value]) => {
    return (
        <option value={key}>{value}</option>
    )
}
)

function ModuleSelector(){
    return (
        <div className="form-group">
        <label htmlFor="project">Проект/Модуль</label>
        <select id="project" name="project" required defaultValue={""}>
            {listModules}
        </select>
    </div>
    )
};

export default ModuleSelector