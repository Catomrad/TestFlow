import React from "react"

const templates = new Map([
    ["", "Без шаблона"],
    ["basic", "Базовый шаблон"],
    ["api", "API-тест"]
]);

const listTemplates = Array.from(templates).map(([key, value]) => {
    return (
        <option value={key}>{value}</option>
    )
})

function TemplateSelector({ onTemplateChange }) {
    const handleChange = (e) => {
        onTemplateChange(e.target.value);
    };

    return (
        <div className="form-group">
            <label htmlFor="template">Выбрать шаблон:</label>
            <select id="template" onChange={handleChange}>
                {listTemplates}
            </select>
        </div>
    )
}

export default TemplateSelector