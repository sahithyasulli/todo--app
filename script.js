// Get elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a task
function addTodo() {
    const task = input.value.trim();
    if (task === '') return;

    const li = document.createElement('li');
    li.textContent = task;

    // Mark complete on click
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent marking complete
        todoList.removeChild(li);
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = ''; // clear input
}

// Button click
addBtn.addEventListener('click', addTodo);

// Press Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});