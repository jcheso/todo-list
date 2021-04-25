import { compareAsc, format } from "date-fns";

//Factory to create new Todo items - properties to incl. title, description, dueDate, priority and status
const taskFactory = (task, description, group, dueDate, priority) => {
  let isComplete = false;
  return { task, description, group, dueDate, priority, isComplete };
};

//Module to modify the Todo item - create new Todo, setting todo as complete, changing priority
const taskController = (() => {
  let taskList = [];
  let projectList = [];

  const addTask = () => {
    const taskFormData = displayController.getTaskForm(event);
    taskList.push(
      taskFactory(
        taskFormData.task,
        taskFormData.description,
        taskFormData.group,
        taskFormData.dueDate,
        taskFormData.priority
      )
    );
    displayController.addTask(
      taskList[taskList.length - 1],
      taskList.length - 1
    );
  };

  const markTaskComplete = (event) => {
    const id = event.target.parentElement.parentElement.id;
    console.log(taskList[id].isComplete);
    if (taskList[id].isComplete) {
      taskList[id].isComplete = false;
    } else {
      taskList[id].isComplete = true;
    }
    displayController.markTaskComplete(id);
    console.log(taskList[id].isComplete);
  };

  const deleteTask = (event) => {
    const id = event.target.parentElement.parentElement.id;
    taskList.splice(id, 1, "");
    displayController.deleteTask(id);
  };
  return { addTask, markTaskComplete, deleteTask };
})();

//Module to handle DOM related stuff - eventListeners, insert new item, delete item, expand a todo, show priority (color)
const displayController = (() => {
  const openForm = () =>
    (document.getElementById("myForm").style.display = "block");

  const closeForm = () =>
    (document.getElementById("myForm").style.display = "none");

  const getTaskForm = (event) => {
    const task = document.getElementById("task").value;
    const description = document.getElementById("description").value;
    const group = document.getElementById("group").value;
    const dueDate = document.getElementById("due-date").value;
    let priority = "";
    if (document.getElementById("priority-high").checked) {
      priority = "high";
    } else if (document.getElementById("priority-medium").checked) {
      priority = "medium";
    } else {
      priority = "low";
    }
    event.preventDefault();
    return { task, description, group, dueDate, priority };
  };

  const initialiseEventListeners = () => {
    document.getElementById("close-btn").addEventListener("click", closeForm);
    document.getElementById("open-btn").addEventListener("click", openForm);
    document
      .getElementById("add-task-form")
      .addEventListener("submit", taskController.addTask);
  };

  const addDiv = (className, parentElement, innerHTML) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", className);
    newDiv.innerHTML = innerHTML;
    parentElement.appendChild(newDiv);
  };

  //Add new task to DOM
  const addTask = (taskObj, index) => {
    const todoList = document.getElementById("todo-list");

    const todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todo-item");
    todoItem.setAttribute("id", index);
    todoList.appendChild(todoItem);

    const todoItemCompleteButton = document.createElement("button");
    todoItem.appendChild(todoItemCompleteButton);

    const todoImage = document.createElement("IMG");
    todoImage.setAttribute("src", "/assets/done_black_24dp.svg");
    todoImage.addEventListener("click", taskController.markTaskComplete);
    todoItemCompleteButton.appendChild(todoImage);

    const todoItemDeleteButton = document.createElement("button");
    todoItem.appendChild(todoItemDeleteButton);

    const todoImageDelete = document.createElement("IMG");
    todoImageDelete.setAttribute("src", "/assets/delete_black_24dp.svg");
    todoImageDelete.addEventListener("click", taskController.deleteTask);
    todoItemDeleteButton.appendChild(todoImageDelete);

    addDiv("todo-item-title", todoItem, taskObj.task);
    addDiv("todo-item-dueDate", todoItem, taskObj.dueDate);
    addDiv("todo-item-group", todoItem, taskObj.group);
  };

  // Mark Complete
  const markTaskComplete = (id) => {
    const task = document.getElementById(id);
    const taskClass = task.getAttribute("class");
    if (taskClass == "todo-item") {
      task.setAttribute("class", "todo-item-complete");
    } else {
      task.setAttribute("class", "todo-item");
    }
  };
  // Delete task from DOM
  const deleteTask = (id) => {
    document.getElementById(id).remove();
  };

  // Add new project to DOM

  // Delete project from DOM
  // Expand task to show description

  // Change project

  initialiseEventListeners();

  return { getTaskForm, addTask, markTaskComplete, deleteTask };
})();

export { taskFactory, taskController, displayController };
