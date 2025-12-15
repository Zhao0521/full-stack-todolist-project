import { postTodos, getTodos, delTotos } from "./api.js";
import { resetResult, resetTodoList, resetInput, createButton, createLi } from "./render.js";

const input = document.getElementById('userInput'); // 輸入框
const postBtn = document.getElementById('postBtn'); // 新增鈕
const getBtn = document.getElementById('getBtn'); // 查詢鈕
const result = document.getElementById('result'); // <pre>資料傳回顯示區
const list = document.getElementById('todoList'); // <ul>資料清單顯示區

resetResult(); // 刷新<pre>顯示區
postBtn.addEventListener('click', createTodo);
getBtn.addEventListener('click', selectTodo);

// 新增記事 函式
async function createTodo(){
    const trimInput = input.value.trim();
    const postDatas = await postTodos(trimInput); // fetch API - POST 回傳的 datas 用 postDatas 變數接住。
    
    resetInput(); // 清空輸入框

    const li = createLi(); // 創建新<li>
    const delBtn = createButton(); // 創建新按鈕

    li.dataset.id = postDatas.id; // 將 postTodos 回傳 datas 物件裡的屬性 id 綁定到新建立的 <li data-id> 上作為自訂屬性儲存。
    li.textContent = postDatas.title; 
    delBtn.textContent = '刪除';

    // 串接DOM節點
    li.appendChild(delBtn);
    list.appendChild(li);

    // 刪除按鈕 事件處理
    delBtn.addEventListener('click', async() => {
        const delDatas = await delTotos(li.dataset.id);
        if( delDatas.success ) {
            li.remove();
        }
    });
}

// 查詢記事 函式
async function selectTodo() {
    const selectDatas = await getTodos(); // fetch API - GET 回傳的 datas(id, title) 用 selectDatas 變數接住。
    
    // 清除原render畫面
    resetTodoList();
    resetResult();

    if (selectDatas.length === 0) {
        result.textContent = " 目前無待辦事項... ";
        return;
    }
    
    selectDatas.forEach(item => {
        const li = createLi(); // 創建新<li>
        const delBtn = createButton(); // 創建新按鈕
        li.dataset.id = item.id // 將 getTodos 回傳 datas 物件裡的屬性 id 綁定到新建立的 <li data-id> 上作為自訂屬性儲存。
        li.textContent = `ID: ${item.id} - ${item.title}`;
        delBtn.textContent = '刪除';

        // 串接 DOM 節點
        li.appendChild(delBtn);
        list.appendChild(li);

        // 刪除按鈕 事件處理
        delBtn.addEventListener('click', async() => {
            const delDatas = await delTotos(li.dataset.id);
            if( delDatas.success ) {
                li.remove();
            }
        });
    });
}