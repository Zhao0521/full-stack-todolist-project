const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// POST 新增 todo
app.post('/todos', async(req, res) => {
    const { title } = req.body;
    const result = await pool.query(
        'INSERT INTO todos (title) VALUES ($1) RETURNING *', [title]
    );
    res.json(result.rows[0]);
});

// GET 讀取 todo
app.get('/todos', async(req, res) => {
    const result = await pool.query( 'SELECT id, title FROM todos ORDER BY id ASC' );
    res.json(result.rows);
});

// DELETE 刪除 todo
app.delete('/todos/:id', async(req, res) => {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    if (result.rowCount > 0) {
        // 刪除成功，返回成功訊息
        res.json({
            success: true,
            message: 'Todo deleted successfully'
        });
    } else {
        // 返回錯誤訊息
        res.status(404).json({
            success: false,
            message: 'Todo not found'
        });
    }
});

// 啟動伺服器
app.listen(port, () => console.log(`Server running on ${port}`));