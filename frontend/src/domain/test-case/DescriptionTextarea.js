import React from "react"

function DescriptionTextarea() {
    return (
        <>
        <label htmlFor="description">Примечание</label>
        <div className="form-group">
            <textarea id="description" name="description" required></textarea>
        </div>
        </>
    )
}

export default DescriptionTextarea