// Array to store tasks
let tasks = [];
let editIndex = null; // To keep track of the task being edited

// Function to get a random light shade color
function getRandomLightColor() {
    const colors = [
        '#f8d7da', '#d1ecf1', '#d4edda', '#fff3cd', 
        '#f1e7fe', '#f8d5d9', '#e3f7e6', '#fdf4e4'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to display tasks
function displayTasks() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.style.backgroundColor = getRandomLightColor();

        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Due: ${task.date}</small>
            <small>Tags: ${task.tags}</small>
            <button class="edit-button" onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(taskElement);
    });
}

// Function to handle form submission
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const date = document.getElementById('task-date').value;
    const tags = document.getElementById('task-tags').value;

    // If editIndex is null, add a new task; otherwise, update the existing task
    if (editIndex === null) {
        // Create a new task object
        const task = {
            title: title,
            description: description,
            date: date,
            tags: tags
        };

        // Add the new task to the array
        tasks.push(task);
    } else {
        // Update the task at the editIndex
        tasks[editIndex] = {
            title: title,
            description: description,
            date: date,
            tags: tags
        };
        editIndex = null; // Reset editIndex after editing
    }

    // Display the updated list of tasks
    displayTasks();

    // Clear the form
    document.getElementById('task-form').reset();
});

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    displayTasks(); // Refresh the task list
}

// Function to edit a task
function editTask(index) {
    // Set editIndex to the index of the task being edited
    editIndex = index;

    // Populate the form with the task details
    document.getElementById('task-title').value = tasks[index].title;
    document.getElementById('task-desc').value = tasks[index].description;
    document.getElementById('task-date').value = tasks[index].date;
    document.getElementById('task-tags').value = tasks[index].tags;
}

function deleteTask(index) {
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (confirmed) {
        tasks.splice(index, 1); // Remove the task from the array
        displayTasks(); // Refresh the task list
    }
}

// Initial display of tasks (in case there are pre-existing tasks)
displayTasks();