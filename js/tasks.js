const taskForm = document.getElementById('taskForm');
const taskTableBody = document.getElementById('taskTableBody');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

renderTasks();

taskForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const task = {

    id: Date.now(),

    header: document.getElementById('header').value,

    item: document.getElementById('item').value,

    assignedTo: document.getElementById('assignedTo').value,

    startDate: document.getElementById('startDate').value,

    endDate: document.getElementById('endDate').value,

    description: document.getElementById('description').value,

    category: 'Task',

    completed: false
  };

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderTasks();

  taskForm.reset();
});

function renderTasks() {

  taskTableBody.innerHTML = '';

  tasks
    .filter(task => task.category === 'Task')
    .forEach(task => {

      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${task.header}</td>
        <td>${task.item}</td>
        <td>${task.assignedTo}</td>
        <td>${task.startDate}</td>
        <td>${task.endDate}</td>

        <td>
          <input
            type="checkbox"
            ${task.completed ? 'checked' : ''}
            onchange="toggleTask(${task.id})"
          />
        </td>

        <td>
          <button
            class="delete-btn"
            onclick="deleteTask(${task.id})"
          >
            Delete
          </button>
        </td>
      `;

      taskTableBody.appendChild(row);
    });
}

function toggleTask(id) {

  tasks = tasks.map(task => {

    if(task.id === id){
      task.completed = !task.completed;
    }

    return task;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderTasks();
}

function deleteTask(id){

  tasks = tasks.filter(task => task.id !== id);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderTasks();
}
