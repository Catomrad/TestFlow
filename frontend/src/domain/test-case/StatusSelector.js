import React from "react"

const statuses = new Map([
    ["draft", "Черновик"],
    ["ready", "Готов"],
]);

const listStatuses = Array.from(statuses).map(([key, value]) => {
    return (
        <option value={key}>{value}</option>
    )
}
)

function StatusSelector(){
    return (
        <div className="form-group">
        <label htmlFor="status">Статус</label>
        <select id="status" name="status" required defaultValue={"ready"}>
            {listStatuses}
        </select>
    </div>
    )
};

export default StatusSelector