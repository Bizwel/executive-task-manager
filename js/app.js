const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.getElementById('totalTasks').innerText = tasks.length;

document.getElementById('completedTasks').innerText =
  tasks.filter(t => t.completed).length;

document.getElementById('pendingTasks').innerText =
  tasks.filter(t => !t.completed).length;

document.getElementById('projectCompleted').innerText =
  tasks.filter(
    t => t.category === 'Project' && t.completed
  ).length;

document.getElementById('notificationCount').innerText =
  tasks.filter(t => !t.completed).length;
