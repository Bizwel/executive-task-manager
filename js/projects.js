const projectForm =
  document.getElementById('projectForm');

const projectTableBody =
  document.getElementById('projectTableBody');

let projects =
  JSON.parse(localStorage.getItem('projects')) || [];

renderProjects();


// Add Project

projectForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const project = {

    id: Date.now(),

    name:
      document.getElementById('projectName').value,

    owner:
      document.getElementById('projectOwner').value,

    startDate:
      document.getElementById('projectStartDate').value,

    endDate:
      document.getElementById('projectEndDate').value,

    description:
      document.getElementById('projectDescription').value,

    completed:false
  };

  projects.push(project);

  saveProjects();

  renderProjects();

  projectForm.reset();
});


// Render Projects

function renderProjects(){

  projectTableBody.innerHTML = '';

  projects.forEach(project => {

    const row = document.createElement('tr');

    row.innerHTML = `

      <td>${project.name}</td>

      <td>${project.description}</td>

      <td>${project.owner}</td>

      <td>${project.startDate}</td>

      <td>${project.endDate}</td>

      <td>

        <input
          type="checkbox"
          ${project.completed ? 'checked' : ''}
          onchange="toggleProject(${project.id})"
        />

      </td>

      <td>

        <button
          class="delete-btn"
          onclick="deleteProject(${project.id})"
        >
          Delete
        </button>

      </td>

      <td>

  <input
    type="checkbox"
    ${project.completed ? 'checked' : ''}
    onchange="toggleProject(${project.id})"
  />

  <span class="${
    project.completed
    ? 'status-complete'
    : 'status-pending'
  }">

    ${
      project.completed
      ? 'Completed'
      : 'In Progress'
    }

  </span>

</td>
    `;

    projectTableBody.appendChild(row);
  });
}


// Toggle Complete

function toggleProject(id){

  projects = projects.map(project => {

    if(project.id === id){
      project.completed = !project.completed;
    }

    return project;
  });

  saveProjects();

  renderProjects();
}


// Delete Project

function deleteProject(id){

  projects =
    projects.filter(project => project.id !== id);

  saveProjects();

  renderProjects();
}


// Save LocalStorage

function saveProjects(){

  localStorage.setItem(
    'projects',
    JSON.stringify(projects)
  );
}
