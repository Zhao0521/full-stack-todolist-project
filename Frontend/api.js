// fetch API - POST
export async function postTodos(title){
    if (!title) return;

    const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });
    const datas = await response.json();
    return datas;
}

// fetch API - GET
export async function getTodos(){
    const response = await fetch('http://localhost:3000/todos');
    const datas = await response.json();
    return datas;
}

// fetch API - DELETE
export async function delTotos(id) {
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE'
        });
        if ( !response.ok ) {
            // 根據狀態碼處理不同的錯誤
            if ( response.status === 404 ) {
                throw new Error('Todo not found');
            } else {
                throw new Error(`Unexpected error`);
            }
        }
        const datas = await response.json();
        return datas;
    } catch (error) {
        console.error('Error during DELETE operation:', error);
    }
}