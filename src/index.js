import { compareAsc, format } from "date-fns";

//Factory to create new Todo items - properties to incl. title, description, dueDate, priority and status
const taskFactory = (task, description, group, dueDate, priority) => {
  let isComplete = false;
  return { task, description, group, dueDate, priority, isComplete };
};

//Module to modify the Todo item - create new Todo, setting todo as complete, changing priority
const taskController = (() => {
  let taskList = [];
  let groupList = ["View All", "General"];

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
    displayController.deleteElement(id);
  };

  const deleteGroup = (event) => {
    const groupName = event.target.parentElement.parentElement.id;
    const id = groupList.indexOf(groupName);
    // Delete the option from the dropdown
    displayController.deleteElement(groupName);
    // Delete the group from the array
    groupList.splice(id, 1, "");
    // Delete the group from the DOM
    displayController.deleteElement(groupName);
    // Check if tasks are under the group, if so delete the tasks
    taskList.forEach((taskObj, index) => {
      // For each task, check if the taskList.group = groupName
      if (taskObj.group == groupName) {
        taskList.splice(index, 1, "");
        displayController.deleteElement(index);
      }
    });
  };

  const addGroup = () => {
    // Get form variables from DOM input function
    const newGroup = displayController.getGroupForm(event);
    console.log(newGroup);
    // Check if existing and add to array
    if (groupList.includes(newGroup)) {
      alert("This group already exists");
    } else {
      groupList.push(newGroup);
      displayController.addGroup(newGroup, groupList.length - 1);
      console.table(groupList);
    }
  };

  const displayGroup = () => {
    const groupName = event.target.parentElement.id;

    displayController.clearTaskDisplay();
    // If groupName is View all - just display all instead.
    taskList.forEach((taskObj, index) => {
      if (taskObj.group == groupName) {
      displayController.addTask(taskObj, index);
      }
    });
    
  };
  return {
    addTask,
    markTaskComplete,
    deleteTask,
    addGroup,
    deleteGroup,
    displayGroup,
  };
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
    document.getElementById("View All").addEventListener("click", taskController.displayGroup);
    document.getElementById("General").addEventListener("click", taskController.displayGroup);
    document
      .getElementById("add-task-form")
      .addEventListener("submit", taskController.addTask);
    document
      .getElementById("new-group-form")
      .addEventListener("submit", taskController.addGroup);
  };

  const addDiv = (className, parentElement, innerHTML) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", className);
    newDiv.innerHTML = innerHTML;
    parentElement.appendChild(newDiv);
  };

  //Add new task to DOM
  const addTask = (taskObj, index) => {
    const todoList = document.getElementById("todo-list-content");

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
  const deleteElement = (id) => {
    document.getElementById(id).remove();
  };

  // Add new group to DOM
  // Collect form data, check if group name already exists.
  const getGroupForm = (event) => {
    const newGroup = document.getElementById("new-group").value;
    event.preventDefault();
    return newGroup;
  };
  // Add the group to the select DOM, add the group to the side bar DOM
  const addGroup = (newGroup, index) => {
    const groupList = document.getElementById("group-list");

    const groupItem = document.createElement("div");
    groupItem.setAttribute("class", "group-item");
    groupItem.setAttribute("id", newGroup);
    groupList.appendChild(groupItem);

    const groupName = document.createElement("div");
    groupName.setAttribute("class", "group-title");
    groupName.innerHTML = newGroup;
    groupName.addEventListener("click", taskController.displayGroup);
    groupItem.appendChild(groupName);

    const groupDeleteButton = document.createElement("button");
    groupItem.appendChild(groupDeleteButton);

    const groupDelete = document.createElement("IMG");
    groupDelete.setAttribute("src", "/assets/clear_black_24dp.svg");
    groupDelete.addEventListener("click", taskController.deleteGroup);
    groupDeleteButton.appendChild(groupDelete);

    const groupSelect = document.getElementById("group");
    const groupSelectOption = document.createElement("option");
    groupSelectOption.setAttribute("value", newGroup);
    groupSelectOption.setAttribute("id", newGroup);
    groupSelectOption.text = newGroup;
    groupSelect.appendChild(groupSelectOption);
  };

  // Expand task to show description

  // Change group
  const clearTaskDisplay = () => {
    const oldTodoList = document.getElementById("todo-list-content");
    oldTodoList.remove();

    const newTodoList = document.createElement("div");
    newTodoList.setAttribute("id", "todo-list-content");
    newTodoList.setAttribute("class", "todo-list");

    const todoList = document.getElementById("todo-list")
    todoList.appendChild(newTodoList)
  };

  initialiseEventListeners();

  return {
    getTaskForm,
    addTask,
    markTaskComplete,
    deleteElement,
    getGroupForm,
    addGroup,
    clearTaskDisplay,
  };
})();

export { taskFactory, taskController, displayController };
