// 區分本地開發/線上部署 .env
require('dotenv').config({
    path: process.env.NODE_ENV === 'deploy' ? '.env.deploy' : '.env'
});

// 本地端開發，程式預設 NODE_ENV=development
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`Running in ${NODE_ENV} mode`);

// 設定環境變數 -> TERMINAL打: $env:NODE_ENV="deploy"
// 確認當前環境 -> echo $env:NODE_ENV

// 建立連線池
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = pool;