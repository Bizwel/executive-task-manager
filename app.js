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
