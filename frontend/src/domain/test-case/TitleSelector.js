import React from "react"

function TitleSelector() {
    return (
        <div className="form-group">
            <label htmlFor="title">Название</label>
            <input type="text" id="title" name="title" required maxLength="255" placeholder="Введите название тест-кейса"/>
        </div>
    )
}

export default TitleSelector