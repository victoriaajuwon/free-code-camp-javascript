// accessing the task-form, confirm-close-dialog, and open-task-form-btn elements
const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const openTaskFormBtn = document.getElementById('open-task-form-btn');

// accessing the close-task-form-btn, add-or-update-task-btn, and cancel-btn elements
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');

//accessing the discard-btn, tasks-container, and title-input elements
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');

//accessing the date-input, and description-input elements
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');

//create an empty array to store tasks
const taskData = JSON.parse(localStorage.getItem("data")) || [];

//create an empty object  to store current tasks
let currentTask = {};

//create a function called addOrUpdateTask
const addOrUpdateTask = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(' ').join('-')}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    };
    console.log(taskObj);
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }
    localStorage.setItem("data", JSON.stringify(taskData));
    updateTaskContainer();
    reset();
}

//create an updateTaskContainer function
const updateTaskContainer = () => {
    tasksContainer.innerHTML = '';
    taskData.forEach(({id, title, date, description})=>{
        (tasksContainer.innerHTML += `
        <div class="task" id="${id}">
        <p><strong>Title:</strong>${title}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Description:</strong>${description}</p>
        <button type="button" class="btn" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
        </div>
        `)
    });
}

//create a delete task function
const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
}

//create a edit task function
const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    currentTask = taskData[dataArrIndex];
    //staging the currentTask for editing
    titleInput.value = currentTask.title ;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
    addOrUpdateTaskBtn.innerText = "Update Task";
    taskForm.classList.toggle("hidden");
}

//create a function to clear the user input after it has been submitted
const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    titleInput.value = '';
    dateInput.value = '';
    descriptionInput.value = '';
    taskForm.classList.toggle('hidden');
    currentTask = {};
}

//checking if the taskData array is empty or not so it can display appropriately
if (taskData.length) {
    updateTaskContainer();
}

//add event listeners to the openTaskFormBtn
openTaskFormBtn.addEventListener("click", () => {
    //remove the hidden class from the taskForm
    taskForm.classList.toggle('hidden');
});
/* you can also write the code above as follows
openTaskFormBtn.addEventListener("click", () =>taskForm.classList.toggle("hidden")); */

//add event listeners to the closeTaskFormBtn
closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;
    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
})

//add event listeners to the cancelBtn
cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
})

//add event listeners to the discardBtn
discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset();
})

//add event listeners to the taskForm element
taskForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    /* const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(' ').join('-')}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    };
    console.log(taskObj);
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }
    taskData.forEach(({id, title, date, description})=>{
        (tasksContainer.innerHTML += `
        <div class="task" id="${id}">
        <p><strong>Title:</strong>${title}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Description:</strong>${description}</p>
        <button type="button" class="btn">Edit</button>
        <button type="button" class="btn">Delete</button>
        </div>
        `)
    }); */
    addOrUpdateTask();
});

const myTaskArr = [
    {task: "Walk the Dog", date: "22-04-2022"},
    {task: "Read some books", date: "02-11-2023"},
    {task: "Watch football", date: "10-08-2021"}
];

/* //example of using localStorage to store data for easy retrieval
localStorage.setItem("data", JSON.stringify(myTaskArr));
// localStorage.removeItem("data");
localStorage.clear()
const getTaskArr = localStorage.getItem("data");
console.log(getTaskArr);
const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj); */