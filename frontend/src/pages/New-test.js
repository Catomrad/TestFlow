import '../styles/TestCase.css'

import React from "react";

function NewTest(){
    return (
        <>
        <head>
            <meta charset="UTF-8"/>
            <title>Страница тест-кейса</title>
            <script src="https://cdn.jsdelivr.net/npm/marked@4.0.12/marked.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/simplemde@1.11.2/dist/simplemde.min.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplemde@1.11.2/dist/simplemde.min.css"/>
        </head>
        <form id="testCaseForm">
            <div class="form-group">
                <label for="title">Название</label>
                <input type="text" id="title" name="title" required maxlength="255" placeholder="Введите название тест-кейса"/>
            </div>

            <div class="form-group">
                <label for="priority">Приоритет</label>
                <select id="priority" name="priority" required>
                    <option value="high">Высокий</option>
                    <option value="medium" selected>Средний</option>
                    <option value="low">Низкий</option>
                </select>
            </div>

            <div class="form-group">
                <label for="class">Класс</label>
                <select id="class" name="class">
                    <option value="">Выберите класс</option>
                    <option value="functional">Функциональный</option>
                    <option value="regression">Регрессионный</option>
                    <option value="smoke">Smoke</option>
                </select>
            </div>

            <div class="form-group">
                <label for="project">Проект/Модуль</label>
                <select id="project" name="project" required>
                    <option value="auth">Авторизация</option>
                    <option value="payments">Платежи</option>
                </select>
            </div>

            <div class="form-group">
                <label for="description">Описание (Markdown)</label>
                <textarea id="description" name="description" required></textarea>
            </div>

            <div class="form-group">
                <label for="content">Содержание (Markdown)</label>
                <div class="template-selector">
                    <label for="template">Выбрать шаблон:</label>
                    <select id="template" onchange="applyTemplate()">
                        <option value="">Без шаблона</option>
                        <option value="basic">Базовый шаблон</option>
                        <option value="api">API-тест</option>
                    </select>
                </div>
                <textarea id="content" name="content" required></textarea>
            </div>

            <div class="form-group">
                <label for="tags">Теги</label>
                <input type="text" id="tags" name="tags" placeholder="Введите теги через запятую"/>
            </div>

            <div class="form-group">
                <label for="status">Статус</label>
                <select id="status" name="status" required>
                    <option value="draft">Черновик</option>
                    <option value="ready" selected>Готов</option>
                    <option value="outdated">Устарел</option>
                </select>
            </div>

            <button type="submit">Сохранить тест-кейс</button>
        </form>
        
        </>
    );
}

export default NewTest;