const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // process 是一個 全域物件，可控制 Node.js 程式執行環境的功能
    ssl: {
        rejectUnauthorized: false // Render PostgreSQL 需要 SSL/TLS
    }
});

module.exports = pool;