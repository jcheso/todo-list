/* **Feature List**
- Add tasks to a group with due date, description and priority.
- Expand task to show description
- Add custom groups
- Delete groups and all tasks in it
- Mark tasks complete or delete individual tasks
- Highlight tasks based on their priority
*/

import "./styles.css";
// import addWhite from './assets/add_white_24dp.svg';
import clearWhite from "./assets/clear_white_24dp.svg";
import deleteWhite from "./assets/delete_white_24dp.svg";
import doneWhite from "./assets/done_white_24dp.svg";
import expandMore from "./assets/expand_more_white_24dp.svg";
import expandLess from "./assets/expand_less_white_24dp.svg";

//Factory to create new Todo items - properties to incl. title, description, dueDate, priority and status
const taskFactory = (task, description, group, dueDate, priority, id) => {
  let expandDescription = false;
  let isComplete = false;

  return {
    task,
    description,
    group,
    dueDate,
    priority,
    isComplete,
    expandDescription,
    id,
  };
};

//Module to modify the Todo item - create new Todo, setting todo as complete, changing priority
const taskController = (() => {
  let taskList = [];
  let groupList = ["View All", "General"];
  let currentGroup = "View All";

  const addTask = () => {
    const taskFormData = displayController.getTaskForm(event);
    let expandDescription = false;
    let isComplete = false;
    let id = 0 + taskList.length;

    saveTask(
      taskFormData.task,
      taskFormData.description,
      taskFormData.group,
      taskFormData.dueDate,
      taskFormData.priority,
      isComplete,
      expandDescription,
      id
    );

    taskController.taskList.push(
      taskFactory(
        taskFormData.task,
        taskFormData.description,
        taskFormData.group,
        taskFormData.dueDate,
        taskFormData.priority,
        taskFormData.id
      )
    );

    if (currentGroup !== taskFormData.group) {
      currentGroup = "View All";
      displayGroup(currentGroup);
    } else {
      displayGroup(currentGroup);
    }
  };

  const markTaskComplete = (event) => {
    const id = event.target.parentElement.parentElement.parentElement.id;
    if (taskList[id].isComplete) {
      taskList[id].isComplete = false;
    } else {
      taskList[id].isComplete = true;
    }
    displayController.markTaskComplete(id, taskList[id].priority);
  };

  const deleteTask = (event) => {
    const id = event.target.parentElement.parentElement.parentElement.id;
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
    // Check if existing and add to array
    if (groupList.includes(newGroup)) {
      alert("This group already exists");
    } else {
      groupList.push(newGroup);
      displayController.addGroup(newGroup, groupList.length - 1);
    }
  };

  const displayAll = () => {
    taskList.forEach((taskObj, index) => {
      displayController.addTask(taskObj, index);
    });
  };

  const getGroupName = () => {
    const groupName = event.target.id;
    currentGroup = groupName;
    displayGroup(groupName);
  };

  const displayGroup = (groupName) => {
    // Clear current groups
    displayController.clearTaskDisplay();
    displayController.updateGroupHeader(groupName);
    // If groupName is View all - just display all instead.
    if (groupName == "View All") {
      displayAll();
    } else
      taskList.forEach((taskObj, index) => {
        if (taskObj.group == groupName) {
          displayController.addTask(taskObj, index);
        }
      });
  };

  const displayDescription = () => {
    const id = event.target.parentElement.parentElement.parentElement.id;
    console.log(id);
    const taskObj = taskList[id];
    //Triggered by onclick element on the group.
    // Get the id of the task
    if (!taskObj.expandDescription) {
      displayController.expandDescription(id, taskObj);
      taskObj.expandDescription = true;
    } else {
      displayController.hideDescription(id, taskObj);
      taskObj.expandDescription = false;
    }

    // Run a function in displayController to insert a div below the task with the description
    // Function checks if div exists already, if so, delete it instead of adding
  };

  return {
    addTask,
    markTaskComplete,
    deleteTask,
    addGroup,
    deleteGroup,
    displayGroup,
    currentGroup,
    getGroupName,
    displayDescription,
    taskList,
    displayAll,
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
    document
      .getElementById("View All")
      .addEventListener("click", taskController.getGroupName);
    document
      .getElementById("General")
      .addEventListener("click", taskController.getGroupName);
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
    todoItem.setAttribute("class", `todo-item-${taskObj.priority}`);
    todoItem.setAttribute("id", index);
    todoList.appendChild(todoItem);

    const todoItemDisplay = document.createElement("div");
    todoItemDisplay.setAttribute("class", `todo-item-display`);
    todoItem.appendChild(todoItemDisplay);

    const todoItemExpand = document.createElement("button");
    todoItemExpand.setAttribute("class", "side-bar-btn task-button main-color");
    todoItemDisplay.appendChild(todoItemExpand);

    const todoImageExpand = document.createElement("IMG");
    todoImageExpand.setAttribute("id", `expand${index}`);
    todoImageExpand.setAttribute("src", expandMore);
    todoImageExpand.addEventListener(
      "click",
      taskController.displayDescription
    );
    todoItemExpand.appendChild(todoImageExpand);

    const todoItemContainer = document.createElement("div");
    todoItemContainer.setAttribute("class", `todo-item-container`);
    todoItemDisplay.appendChild(todoItemContainer);

    addDiv("todo-item-title", todoItemContainer, taskObj.task);
    addDiv("todo-item-group", todoItemContainer, taskObj.group);
    addDiv("todo-item-dueDate", todoItemContainer, taskObj.dueDate);

    const todoItemCompleteButton = document.createElement("button");
    todoItemCompleteButton.setAttribute(
      "class",
      "side-bar-btn task-button main-color"
    );
    todoItemDisplay.appendChild(todoItemCompleteButton);

    const todoImage = document.createElement("IMG");
    todoImage.setAttribute("src", doneWhite);
    todoImage.addEventListener("click", taskController.markTaskComplete);

    todoItemCompleteButton.appendChild(todoImage);

    const todoItemDeleteButton = document.createElement("button");
    todoItemDeleteButton.setAttribute(
      "class",
      "side-bar-btn task-button main-color"
    );
    todoItemDisplay.appendChild(todoItemDeleteButton);

    const todoImageDelete = document.createElement("IMG");
    todoImageDelete.setAttribute("src", deleteWhite);
    todoImageDelete.addEventListener("click", taskController.deleteTask);
    todoItemDeleteButton.appendChild(todoImageDelete);
  };

  // Mark Complete
  const markTaskComplete = (id, priority) => {
    const task = document.getElementById(id);
    const taskClass = task.getAttribute("class");
    if (taskClass == `todo-item-${priority}`) {
      task.setAttribute("class", "todo-item-complete");
    } else {
      task.setAttribute("class", `todo-item-${priority}`);
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
    groupItem.setAttribute("class", "side-bar-field");
    groupItem.setAttribute("id", newGroup);
    groupList.appendChild(groupItem);

    const groupItemButton = document.createElement("button");
    groupItemButton.setAttribute("class", "side-bar-btn accent-color");
    groupItemButton.innerHTML = newGroup;
    groupItemButton.setAttribute("id", newGroup);
    groupItemButton.addEventListener("click", taskController.getGroupName);
    groupItem.appendChild(groupItemButton);

    const groupDeleteButton = document.createElement("button");
    groupDeleteButton.setAttribute("class", "new-group-btn ");
    groupItem.appendChild(groupDeleteButton);

    const groupDelete = document.createElement("IMG");
    groupDelete.setAttribute("src", clearWhite);
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

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(newTodoList);
  };

  const updateGroupHeader = (currentGroup) => {
    document.getElementById("todo-header").innerText = currentGroup;
  };

  const expandDescription = (id, taskObj) => {
    // Change graphic to expand less
    const todoItemExpand = document.getElementById(`expand${id}`);
    todoItemExpand.setAttribute("src", expandLess);
    const todoItem = document.getElementById(id);

    // Insert div below task with description
    const todoItemDescription = document.createElement("div");
    todoItemDescription.setAttribute("class", `todo-item-description`);
    todoItemDescription.setAttribute("id", `description-${taskObj.id}`);
    todoItemDescription.innerText = taskObj.description;
    todoItem.appendChild(todoItemDescription);
  };

  const hideDescription = (id, taskObj) => {
    // Remove div with description
    const todoItemDescription = document.getElementById(
      `description-${taskObj.id}`
    );
    todoItemDescription.remove();
    // Change icon back to expand more
    const todoItemExpand = document.getElementById(`expand${id}`);
    todoItemExpand.setAttribute("src", expandMore);
  };

  initialiseEventListeners();
  updateGroupHeader(taskController.currentGroup);

  return {
    getTaskForm,
    addTask,
    markTaskComplete,
    deleteElement,
    getGroupForm,
    addGroup,
    clearTaskDisplay,
    updateGroupHeader,
    expandDescription,
    hideDescription,
  };
})();

// Firebase code
var firebaseConfig = {
  apiKey: "AIzaSyACz1AHyxagyhFKWK3sAooP_XZT2Yv-ap4",
  authDomain: "todo-list-720bb.firebaseapp.com",
  projectId: "todo-list-720bb",
  storageBucket: "todo-list-720bb.appspot.com",
  messagingSenderId: "726740587123",
  appId: "1:726740587123:web:4e27b1cb8d55e381d81006",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

// Set event listeners to sign in/out elements
let signInButtonElement = document.getElementById("sign-in");
let signOutButtonElement = document.getElementById("sign-out");
let userPicElement = document.getElementById("user-pic");
let userNameElement = document.getElementById("user-name");
signOutButtonElement.addEventListener("click", signOut);
signInButtonElement.addEventListener("click", signIn);

// Signs-in
function signIn() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

// Signs-out
function signOut() {
  firebase.auth().signOut();
}

// Returns the signed-in user's profile pic URL.
function getProfilePicUrl() {
  return (
    firebase.auth().currentUser.photoURL || "/images/profile_placeholder.png"
  );
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf("googleusercontent.com") !== -1 && url.indexOf("?") === -1) {
    return url + "?sz=150";
  }
  return url;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage =
      "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute("hidden");
    userPicElement.removeAttribute("hidden");
    signOutButtonElement.removeAttribute("hidden");

    // Hide sign-in button.
    signInButtonElement.setAttribute("hidden", "true");
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute("hidden", "true");
    userPicElement.setAttribute("hidden", "true");
    signOutButtonElement.setAttribute("hidden", "true");

    // Show sign-in button.
    signInButtonElement.removeAttribute("hidden");
  }
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

const saveTask = (task, description, group, dueDate, priority, id) => {
  console.log("Saving task to database");
  return db
    .collection("tasks")
    .add({
      task: task,
      description: description,
      group: group,
      dueDate: dueDate,
      priority: priority,
      id: id,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error writing new message to database", error);
    });
};
// Loads chat messages history and listens for upcoming ones.
async function loadTasks() {
  await db
    .collection("tasks")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((task) => {
        let taskData = task.data();
        console.log("retrieving task", task.id);
        taskController.taskList.push(
          taskFactory(
            taskData.task,
            taskData.description,
            taskData.group,
            taskData.dueDate,
            taskData.priority,
            taskData.id
          )
        );
      });
    });
  taskController.displayGroup("View All");

  console.log("tasks loaded");
}

const deleteTask = (task) => {
  db.collection("tasks")
    .doc("DC")
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

initFirebaseAuth();
loadTasks();
