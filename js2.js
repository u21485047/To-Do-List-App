window.onload = function() {
    // Add task
    const addTask = function(event) {
      event.preventDefault();
      const input = document.querySelector('input[type="text"]');
      const select = document.querySelector('select');
      const table = document.querySelector('table tbody');
  
      // Check if input is not empty
      if (input.value.trim() !== '') {
        // Create new row
        const row = document.createElement('tr');
  
        // Create cells
        const taskCell = document.createElement('td');
        const dateCell = document.createElement('td');
        const priorityCell = document.createElement('td');
        const actionCell = document.createElement('td');
  
        // Add input and select values to cells
        taskCell.innerText = input.value;
        dateCell.innerText = 'N/A'; // Change this to the date value
        priorityCell.innerText = select.value;
  
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.innerText = 'Delete';
  
        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
          table.removeChild(row);
        });
  
        // Add cells to row
        row.appendChild(taskCell);
        row.appendChild(dateCell);
        row.appendChild(priorityCell);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
  
        // Add row to table
        table.appendChild(row);
  
        // Clear input field
        input.value = '';
      }
    };
  
    // Add event listener to form submit button
    const form = document.querySelector('form');
    form.addEventListener('submit', addTask);
  
    // Search task
    const searchTask = function(event) {
      event.preventDefault();
      const input = document.querySelector('input[type="text"]');
      const rows = document.querySelectorAll('table tbody tr');
  
      // Loop through rows and hide/show based on search term
      for (let i = 0; i < rows.length; i++) {
        const taskName = rows[i].querySelector('td:nth-child(1)').innerText;
        if (taskName.toLowerCase().includes(input.value.toLowerCase())) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    };
  
    // Add event listener to search button
    const searchButton = document.querySelector('form:nth-of-type(2) button[type="submit"]');
    searchButton.addEventListener('submit', searchTask);
  };