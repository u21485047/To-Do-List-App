// Selectors
const taskInput = document.querySelector('.task-input');
const priorityInput = document.querySelector('.priority-input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('.task-list');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

// Event listeners
addButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
searchButton.addEventListener('click', searchTask);

// Functions
function addTask(event) {
  event.preventDefault();

  if (taskInput.value.trim() === '') {
    alert('Please enter a task');
    return;
  }

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const taskName = document.createElement('li');
  taskName.classList.add('task-name');
  taskName.innerText = taskInput.value;
  taskDiv.appendChild(taskName);

  const dueDate = document.createElement('li');
  dueDate.classList.add('due-date');
  dueDate.innerText = formatDate(new Date());
  taskDiv.appendChild(dueDate);

  const priority = document.createElement('li');
  priority.classList.add('priority');
  priority.innerText = priorityInput.value;
  taskDiv.appendChild(priority);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  taskDiv.appendChild(deleteButton);

  taskList.appendChild(taskDiv);

  taskInput.value = '';
  priorityInput.value = 'low';
}

function deleteTask(event) {
  const item = event.target;

  if (item.classList.contains('delete-button')) {
    const task = item.parentElement;
    task.remove();
  }
}

function searchTask(event) {
  event.preventDefault();

  const searchValue = searchInput.value.trim().toLowerCase();
  const tasks = taskList.children;

  for (let task of tasks) {
    const taskName = task.querySelector('.task-name').innerText.toLowerCase();
    const dueDate = task.querySelector('.due-date').innerText.toLowerCase();
    const priority = task.querySelector('.priority').innerText.toLowerCase();

    if (taskName.includes(searchValue) || dueDate.includes(searchValue) || priority.includes(searchValue)) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  }
}

function formatDate(date) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
