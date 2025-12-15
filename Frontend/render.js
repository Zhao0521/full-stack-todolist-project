// 重製<pre>頁面顯示區
export function resetResult(){
    document.getElementById('result').innerHTML = "";
}

// 重製<ul>顯示區
export function resetTodoList(){
    document.getElementById('todoList').innerHTML = "";
}

// 清空輸入框
export function resetInput(){
    document.getElementById('userInput').value = "";
}

// 創建delBtn
export function createButton(){
    return document.createElement('button');  
}

// 創建li
export function createLi(){
    return document.createElement('li');
}