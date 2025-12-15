# 專案名稱 TodoList – Full Stack Practice Project

- A simple full-stack TodoList application built with Vanilla JavaScript, Node.js (Express), and PostgreSQL.
- 這是一個簡單的全端 TodoList 專案，前端使用 Vanilla JS，後端使用 Node.js + Express，資料庫使用 PostgreSQL。

## 功能簡介 Features

- Create new todos
- Fetch todo list from database
- Delete todos
- RESTful API design
- Basic modular frontend structure

## 技術棧 Tech Stack

### Frontend
- HTML / CSS
- Vanilla JavaScript (ES Modules)

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Tools
- Fetch API
- Git

## 專案架構 Project Structure
```text
├─Backend/
├   ├─server.js
├   ├─db.js
├─Frontend/
├   ├─index.html
├   ├─main.js
├   ├─render.js
├   ├─api.js
├─.env.example
├─.gitignore
├─package.json
├─package-lock.json
└─README.md
```

## API 設計 API Endpoints
```text
| Method |   Endpoint   | Description |
|--------|--------------|-------------|
|  GET   |   /todos     | Get all todos {id, title} |
|  POST  |   /todos     | Create a new todo |
| DELETE |   /todos/:id | Delete a todo |
```

## Database Schema
```sql
CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
)
```

## 環境設定檔 - 環境變數說明 (.env)
```text
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=todos_database
DB_PASSWORD=your_db_password
DB_PORT=5432
PORT=3000
```

## 安裝與啟動 Run Locally
1. 安裝套件
```bash
npm install
```

2. 建立 .env 檔(Create a `.env` file based on `.env.example`)
```bash
cp .env.example .env
```

3. 啟動伺服器
```bash 
node backend/server.js
(npm start)
```
4. 開啟前端
Open `index.html` with Live Server

## What I Learned
- RESTful API design
- Client-server data flow
- Basic database schema design
- Async / await and fetch workflow
- Separation of concerns in frontend modules

## Future Improvements
- Add update (edit) todo feature
- Add completed status toggle
- User authentication

## [GitHub Repo]

## Deployment
Frontend:
Backend:
Database:

