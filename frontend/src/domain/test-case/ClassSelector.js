import React from "react"

const classes = new Map([
    ["", "Не выбрано"],
    ["functional", "Функциональный"],
    ["e2e", "E2E"],
    ["smoke", "Smoke"],
]);

const listClasses = Array.from(classes).map(([key, value]) => {
    return (
        <option value={key}>{value}</option>
    )
}
)

function ClassSelector(){
    return (
    <div className="form-group">
    <label htmlFor="className">Класс</label>
    <select id="className" name="className">
        {listClasses}
    </select>
    </div>
    )
};

export default ClassSelector