/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory),\n/* harmony export */   \"taskController\": () => (/* binding */ taskController),\n/* harmony export */   \"displayController\": () => (/* binding */ displayController)\n/* harmony export */ });\n\n\n//Factory to create new Todo items - properties to incl. title, description, dueDate, priority and status\nconst taskFactory = (task, description, group, dueDate, priority) => {\n  let isComplete = false;\n  return { task, description, group, dueDate, priority, isComplete };\n};\n\n//Module to modify the Todo item - create new Todo, setting todo as complete, changing priority\nconst taskController = (() => {\n  let taskList = [];\n  let groupList = [\"View All\", \"General\"];\n\n  const addTask = () => {\n    const taskFormData = displayController.getTaskForm(event);\n    taskList.push(\n      taskFactory(\n        taskFormData.task,\n        taskFormData.description,\n        taskFormData.group,\n        taskFormData.dueDate,\n        taskFormData.priority\n      )\n    );\n    displayController.addTask(\n      taskList[taskList.length - 1],\n      taskList.length - 1\n    );\n  };\n\n  const markTaskComplete = (event) => {\n    const id = event.target.parentElement.parentElement.id;\n    console.log(taskList[id].isComplete);\n    if (taskList[id].isComplete) {\n      taskList[id].isComplete = false;\n    } else {\n      taskList[id].isComplete = true;\n    }\n    displayController.markTaskComplete(id);\n    console.log(taskList[id].isComplete);\n  };\n\n  const deleteTask = (event) => {\n    const id = event.target.parentElement.parentElement.id;\n    taskList.splice(id, 1, \"\");\n    displayController.deleteElement(id);\n  };\n\n  const deleteGroup = (event) => {\n    const groupName = event.target.parentElement.parentElement.id;\n    const id = groupList.indexOf(groupName);\n    // Delete the option from the dropdown\n    displayController.deleteElement(groupName);\n    // Delete the group from the array\n    groupList.splice(id, 1, \"\");\n    // Delete the group from the DOM\n    displayController.deleteElement(groupName);\n    // Check if tasks are under the group, if so delete the tasks\n    taskList.forEach((taskObj, index) => {\n      // For each task, check if the taskList.group = groupName\n      if (taskObj.group == groupName) {\n        taskList.splice(index, 1, \"\");\n        displayController.deleteElement(index);\n      }\n    });\n  };\n\n  const addGroup = () => {\n    // Get form variables from DOM input function\n    const newGroup = displayController.getGroupForm(event);\n    console.log(newGroup);\n    // Check if existing and add to array\n    if (groupList.includes(newGroup)) {\n      alert(\"This group already exists\");\n    } else {\n      groupList.push(newGroup);\n      displayController.addGroup(newGroup, groupList.length - 1);\n      console.table(groupList);\n    }\n  };\n\n  const displayGroup = () => {\n    const groupName = event.target.parentElement.id;\n\n    displayController.clearTaskDisplay();\n    // If groupName is View all - just display all instead.\n    taskList.forEach((taskObj, index) => {\n      if (taskObj.group == groupName) {\n      displayController.addTask(taskObj, index);\n      }\n    });\n    \n  };\n  return {\n    addTask,\n    markTaskComplete,\n    deleteTask,\n    addGroup,\n    deleteGroup,\n    displayGroup,\n  };\n})();\n\n//Module to handle DOM related stuff - eventListeners, insert new item, delete item, expand a todo, show priority (color)\nconst displayController = (() => {\n  const openForm = () =>\n    (document.getElementById(\"myForm\").style.display = \"block\");\n\n  const closeForm = () =>\n    (document.getElementById(\"myForm\").style.display = \"none\");\n\n  const getTaskForm = (event) => {\n    const task = document.getElementById(\"task\").value;\n    const description = document.getElementById(\"description\").value;\n    const group = document.getElementById(\"group\").value;\n    const dueDate = document.getElementById(\"due-date\").value;\n    let priority = \"\";\n    if (document.getElementById(\"priority-high\").checked) {\n      priority = \"high\";\n    } else if (document.getElementById(\"priority-medium\").checked) {\n      priority = \"medium\";\n    } else {\n      priority = \"low\";\n    }\n    event.preventDefault();\n    return { task, description, group, dueDate, priority };\n  };\n\n  const initialiseEventListeners = () => {\n    document.getElementById(\"close-btn\").addEventListener(\"click\", closeForm);\n    document.getElementById(\"open-btn\").addEventListener(\"click\", openForm);\n    document.getElementById(\"View All\").addEventListener(\"click\", taskController.displayGroup);\n    document.getElementById(\"General\").addEventListener(\"click\", taskController.displayGroup);\n    document\n      .getElementById(\"add-task-form\")\n      .addEventListener(\"submit\", taskController.addTask);\n    document\n      .getElementById(\"new-group-form\")\n      .addEventListener(\"submit\", taskController.addGroup);\n  };\n\n  const addDiv = (className, parentElement, innerHTML) => {\n    const newDiv = document.createElement(\"div\");\n    newDiv.setAttribute(\"class\", className);\n    newDiv.innerHTML = innerHTML;\n    parentElement.appendChild(newDiv);\n  };\n\n  //Add new task to DOM\n  const addTask = (taskObj, index) => {\n    const todoList = document.getElementById(\"todo-list-content\");\n\n    const todoItem = document.createElement(\"div\");\n    todoItem.setAttribute(\"class\", \"todo-item\");\n    todoItem.setAttribute(\"id\", index);\n    todoList.appendChild(todoItem);\n\n    const todoItemCompleteButton = document.createElement(\"button\");\n    todoItem.appendChild(todoItemCompleteButton);\n\n    const todoImage = document.createElement(\"IMG\");\n    todoImage.setAttribute(\"src\", \"/assets/done_black_24dp.svg\");\n    todoImage.addEventListener(\"click\", taskController.markTaskComplete);\n    todoItemCompleteButton.appendChild(todoImage);\n\n    const todoItemDeleteButton = document.createElement(\"button\");\n    todoItem.appendChild(todoItemDeleteButton);\n\n    const todoImageDelete = document.createElement(\"IMG\");\n    todoImageDelete.setAttribute(\"src\", \"/assets/delete_black_24dp.svg\");\n    todoImageDelete.addEventListener(\"click\", taskController.deleteTask);\n    todoItemDeleteButton.appendChild(todoImageDelete);\n\n    addDiv(\"todo-item-title\", todoItem, taskObj.task);\n    addDiv(\"todo-item-dueDate\", todoItem, taskObj.dueDate);\n    addDiv(\"todo-item-group\", todoItem, taskObj.group);\n  };\n\n  // Mark Complete\n  const markTaskComplete = (id) => {\n    const task = document.getElementById(id);\n    const taskClass = task.getAttribute(\"class\");\n    if (taskClass == \"todo-item\") {\n      task.setAttribute(\"class\", \"todo-item-complete\");\n    } else {\n      task.setAttribute(\"class\", \"todo-item\");\n    }\n  };\n  // Delete task from DOM\n  const deleteElement = (id) => {\n    document.getElementById(id).remove();\n  };\n\n  // Add new group to DOM\n  // Collect form data, check if group name already exists.\n  const getGroupForm = (event) => {\n    const newGroup = document.getElementById(\"new-group\").value;\n    event.preventDefault();\n    return newGroup;\n  };\n  // Add the group to the select DOM, add the group to the side bar DOM\n  const addGroup = (newGroup, index) => {\n    const groupList = document.getElementById(\"group-list\");\n\n    const groupItem = document.createElement(\"div\");\n    groupItem.setAttribute(\"class\", \"group-item\");\n    groupItem.setAttribute(\"id\", newGroup);\n    groupList.appendChild(groupItem);\n\n    const groupName = document.createElement(\"div\");\n    groupName.setAttribute(\"class\", \"group-title\");\n    groupName.innerHTML = newGroup;\n    groupName.addEventListener(\"click\", taskController.displayGroup);\n    groupItem.appendChild(groupName);\n\n    const groupDeleteButton = document.createElement(\"button\");\n    groupItem.appendChild(groupDeleteButton);\n\n    const groupDelete = document.createElement(\"IMG\");\n    groupDelete.setAttribute(\"src\", \"/assets/clear_black_24dp.svg\");\n    groupDelete.addEventListener(\"click\", taskController.deleteGroup);\n    groupDeleteButton.appendChild(groupDelete);\n\n    const groupSelect = document.getElementById(\"group\");\n    const groupSelectOption = document.createElement(\"option\");\n    groupSelectOption.setAttribute(\"value\", newGroup);\n    groupSelectOption.setAttribute(\"id\", newGroup);\n    groupSelectOption.text = newGroup;\n    groupSelect.appendChild(groupSelectOption);\n  };\n\n  // Expand task to show description\n\n  // Change group\n  const clearTaskDisplay = () => {\n    const oldTodoList = document.getElementById(\"todo-list-content\");\n    oldTodoList.remove();\n\n    const newTodoList = document.createElement(\"div\");\n    newTodoList.setAttribute(\"id\", \"todo-list-content\");\n    newTodoList.setAttribute(\"class\", \"todo-list\");\n\n    const todoList = document.getElementById(\"todo-list\")\n    todoList.appendChild(newTodoList)\n  };\n\n  initialiseEventListeners();\n\n  return {\n    getTaskForm,\n    addTask,\n    markTaskComplete,\n    deleteElement,\n    getGroupForm,\n    addGroup,\n    clearTaskDisplay,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;