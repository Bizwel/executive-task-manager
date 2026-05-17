const taskForm = document.getElementById('taskForm');
const taskTableBody = document.getElementById('taskTableBody');
const searchInput = document.getElementById('searchInput');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

renderTasks();
updateDashboard();

// Add Task

taskForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const task = {
    id: Date.now(),
    header: document.getElementById('header').value,
    item: document.getElementById('item').value,
    category: document.getElementById('category').value,
    assignedTo: document.getElementById('assignedTo').value,
    startDate: document.getElementById('startDate').value,
    endDate: document.getElementById('endDate').value,
    description: document.getElementById('description').value,
    completed: false
  };

  tasks.push(task);

  saveTasks();
  renderTasks();
  updateDashboard();

  taskForm.reset();

  showNotification(task.item);
});

// Render Tasks

function renderTasks(filter = '') {

  taskTableBody.innerHTML = '';

  const filteredTasks = tasks.filter(task =>
    task.item.toLowerCase().includes(filter.toLowerCase()) ||
    task.header.toLowerCase().includes(filter.toLowerCase())
  );

  filteredTasks.forEach(task => {

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${task.header}</td>
      <td>${task.item}</td>
}
// Sidebar Navigation

function showSection(section) {

  // Remove active class
  document.querySelectorAll('.menu-btn')
    .forEach(btn => btn.classList.remove('active'));

  // Add active class
  event.target.classList.add('active');

  // Filter Tasks Based on Menu

  if(section === 'todo') {

    renderFilteredTasks('To Do');

  } else if(section === 'tasks') {

    renderFilteredTasks('Task');

  } else if(section === 'projects') {

    renderFilteredTasks('Project');

  } else {

    renderTasks();
  }
}


// Filter Tasks

function renderFilteredTasks(category) {

  taskTableBody.innerHTML = '';

  const filteredTasks = tasks.filter(
    task => task.category === category
  );

  filteredTasks.forEach(task => {

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${task.header}</td>
      <td>${task.item}</td>
      <td>${task.description}</td>
      <td>${task.startDate}</td>
      <td>${task.endDate}</td>
      <td>${task.assignedTo}</td>
      <td>${task.category}</td>

      <td>
        <input
          type="checkbox"
          ${task.completed ? 'checked' : ''}
          onchange="toggleTask(${task.id})"
        />

        <span class="${task.completed ? 'status-complete' : 'status-pending'}">
          ${task.completed ? 'Yes' : 'No'}
        </span>
      </td>

      <td>
        <button class="delete-btn" onclick="deleteTask(${task.id})">
          Delete
        </button>
      </td>
    `;

    taskTableBody.appendChild(row);
  });
}
