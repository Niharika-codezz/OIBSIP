// Task array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            dateAdded: new Date()
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}

// Function to render tasks
function renderTasks() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        li.setAttribute("data-id", task.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(task.id);
        li.appendChild(deleteButton);

        if (task.completed) {
            li.classList.add("completed");
            completedTasksList.appendChild(li);
        } else {
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.onclick = () => completeTask(task.id);
            li.appendChild(completeButton);
            pendingTasksList.appendChild(li);
        }
    });
}

// Function to complete a task
function completeTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        tasks[taskIndex].dateCompleted = new Date();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Event listener for add task button
document.getElementById("addTaskButton").addEventListener("click", addTask);

// Initial rendering of tasks
renderTasks();