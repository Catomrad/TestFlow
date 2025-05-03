import React from "react";

function NewPlan(){
    return (
        <>
        <form action="" method="get" className="form-example">
            <div className="form-example">
                <label htmlFor="name">Название </label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="form-example">
                <label htmlFor="email">Описание</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className="form-example">
                <input type="submit" value="Subscribe!" />
            </div>
        </form>
        </>
    );
}

export default NewPlan;