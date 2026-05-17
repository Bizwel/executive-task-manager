const projectTableBody =
  document.getElementById('projectTableBody');

const tasks =
  JSON.parse(localStorage.getItem('tasks')) || [];

tasks
  .filter(task => task.category === 'Project')
  .forEach(project => {

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${project.item}</td>
      <td>${project.description}</td>
      <td>${project.assignedTo}</td>
      <td>${project.endDate}</td>
      <td>
        ${project.completed ? 'Completed' : 'Pending'}
      </td>
    `;

    projectTableBody.appendChild(row);
  });
