import React from "react";

const cases = [1, 2, 3, 4];

const listCases = cases.map(item =>
    <li key={item}>{item}</li>
)


function User(){
    return (
        <>
        <h1>Имя пользователя: </h1>
        <h2>Статус: </h2>
        <div>
            <h3>Тест-кейсы</h3>
            <ul>
                {listCases}
            </ul>
        </div>
        </>
    )
}

export default User;