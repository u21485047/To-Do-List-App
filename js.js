window.onload = function() {
// Get the form, table and search input elements
const form = document.querySelector('form');
const table = document.querySelector('table');
const searchInput = document.querySelector('input[type="text"][placeholder="Search tasks"]');

// Function to add a new task
function addTask(e) {
  e.preventDefault();

  // Get the input and select elements
  const taskInput = form.querySelector('input[type="text"]');
  const prioritySelect = form.querySelector('select');

  // Create a new row for the task
  const newRow = document.createElement('tr');

  // Create cells for the row
  const taskCell = document.createElement('td');
  taskCell.textContent = taskInput.value;
  newRow.appendChild(taskCell);

  const dateCell = document.createElement('td');
  dateCell.textContent = 'N/A';
  newRow.appendChild(dateCell);

  const priorityCell = document.createElement('td');
  priorityCell.textContent = prioritySelect.value;
  newRow.appendChild(priorityCell);

  const actionCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.textContent = 'Delete';
  actionCell.appendChild(deleteButton);
  newRow.appendChild(actionCell);

  // Add the new row to the table
  table.querySelector('tbody').appendChild(newRow);
console.log(newRow);
  // Reset the form inputs
  form.reset();
}

$(document).ready(function() {
    $('form').submit(function(event) {
      // Prevent the form from submitting and refreshing the page
      event.preventDefault();
      
      // Get the values from the form inputs
      var taskName = $('input[type="text"]').val();
      var dueDate = ''; // You can add code to get the due date value
      var priority = $('select').val();
      
      // Create a new row for the table
      var newRow = $('<tr>').addClass('table-info');
      newRow.append($('<td>' + '<input type="checkbox">' + '</td>'));
      newRow.append($('<td>').text(taskName));
      newRow.append($('<td>').text(dueDate));
      newRow.append($('<td>').text(priority));
      newRow.append($('<td>').html('<button class="btn btn-danger">Delete</button>'));
      
      // Add the new row to the table body
      $('tbody').append(newRow);
      
      // Clear the form inputs
      $('input[type="text"]').val('');
      $('select').val('low');
    });
  });

// Function to delete a task
function deleteTask(e) {
  if (e.target.classList.contains('btn-danger')) {
    e.target.closest('tr').remove();
  }
}

// Function to search for tasks
function searchTasks(e) {
  const searchText = e.target.value.toLowerCase();

  // Loop through each row in the table
  table.querySelectorAll('tbody tr').forEach(row => {
    const taskName = row.querySelector('td:first-child').textContent.toLowerCase();

    // If the task name matches the search text, show the row, otherwise hide it
    if (taskName.includes(searchText)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Add event listeners to the form, table and search input
form.addEventListener('.submit', addTask);
table.addEventListener('click', deleteTask);
searchInput.addEventListener('input', searchTasks);
};
