const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskAction);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <span class="delete-btn">Delete</span>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function handleTaskAction(event) {
    const target = event.target;
    if (target.classList.contains('delete-btn')) {
        const listItem = target.parentElement;
        taskList.removeChild(listItem);
    } else if (target.classList.contains('task-checkbox')) {
        const taskText = target.nextElementSibling;
        taskText.classList.toggle('completed'); 
    }
}
