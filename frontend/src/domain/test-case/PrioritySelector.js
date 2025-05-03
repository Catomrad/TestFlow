import React from "react"

const priorites = new Map([
    ["urgent", "Срочный"],
    ["high", "Высокий"],
    ["medium", "Средний"],
    ["low", "Низкий"]
]);

const listPriorites = Array.from(priorites).map(([key, value]) => {
    return (
        <option value={key}>{value}</option>
    )
}
)

function PrioritySelector(){
    return (
    <div className="form-group">
    <label htmlFor="priority">Приоритет</label>
    <select id="priority" name="priority" required defaultValue={'medium'}>
        {listPriorites}
        {/* <option value="high">Высокий</option>
        <option value="medium">Средний</option>
        <option value="low">Низкий</option> */}
    </select>
    </div>
    )
};

export default PrioritySelector