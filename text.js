let todoList = [];


loadTodoList();
displayTodo();


function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function loadTodoList() {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
        todoList = JSON.parse(savedList);
    }
}

function addItems() {
    let addItems = document.querySelector("#todo-display");
    let todoItems = addItems.value;
    let addDate = document.querySelector("#date");
    let todoDate = addDate.value;

    todoList.push({ items: todoItems, dueDate: todoDate });
    saveTodoList();  // Save to localStorage after adding
    addItems.value = '';
    addDate.value = '';
    displayTodo();
}

function displayTodo() {
    let displayItems = document.querySelector(".items-container");
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { items, dueDate } = todoList[i];
        newHtml += `
            <span>${items}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="deleteItem(${i})">Delete</button>
        `;
    }
    displayItems.innerHTML = newHtml;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    saveTodoList();  // Save to localStorage after deleting
    displayTodo();
}
