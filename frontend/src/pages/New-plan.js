import React from "react";

function NewPlan(){
    return (
        <>
        <form action="" method="get" class="form-example">
            <div class="form-example">
                <label for="name">Название </label>
                <input type="text" name="name" id="name" required />
            </div>
            <div class="form-example">
                <label for="email">Описание</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div class="form-example">
                <input type="submit" value="Subscribe!" />
            </div>
        </form>
        </>
    );
}

export default NewPlan;