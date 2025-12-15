// 區分本地開發/線上部署 BASE_URL
const BASE_URL = process.env.NODE_ENV === 'deploy'
 ? 'https://full-stack-todolist-project.onrender.com/'
 : 'http://localhost:3000';
 
// fetch API - POST
export async function postTodos(title){
    if (!title) return;

    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });
    const datas = await response.json();
    return datas;
}

// fetch API - GET
export async function getTodos(){
    const response = await fetch(`${BASE_URL}/todos`);
    const datas = await response.json();
    return datas;
}

// fetch API - DELETE
export async function delTotos(id) {
    try {
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
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