const tasks =
  JSON.parse(localStorage.getItem('tasks')) || [];

document.getElementById('reportCompleted').innerText =
  tasks.filter(t => t.completed).length;

document.getElementById('reportPending').innerText =
  tasks.filter(t => !t.completed).length;

document.getElementById('reportProjects').innerText =
  tasks.filter(
    t => t.category === 'Project' && t.completed
  ).length;
