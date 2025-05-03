import React from "react";

function Search(){
    return(
        <>
        <form>
            <div>
                <label htmlFor="type">Тип</label>
                <input type="text" name='type' id="type"></input>
            </div>
            <div>
                <label htmlFor="id">Id</label>
                <input type="text" name='id' id="id"></input>
            </div>
            <div>
                <label htmlFor="name">Имя</label>
                <input type="text" name='name' id="name"></input>
            </div>
            <div>
                <input type="submit" value="Искать"/>
            </div>
        </form>
        </>
    )
}

export default Search;