const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Render PostgreSQL 需要 SSL/TLS
    }
});

module.exports = pool;