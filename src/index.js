import { compareAsc, format } from "date-fns";

const addEventListeners = () => {
    document.getElementById("close-button").addEventListener("click", closeForm)
    document.getElementById("open-button").addEventListener("click", openForm)

}

const openForm = () => {
  document.getElementById("myForm").style.display = "block";
};

const closeForm = () => {
  document.getElementById("myForm").style.display = "none";
};

addEventListeners()

export {openForm, closeForm}

//Factory to create new Todo items - properties to incl. title, description, dueDate, priority and status

//Module to modify the Todo item - create new Todo, setting todo as complete, changing priority

//Module to handle DOM related stuff - eventListeners, insert new item, delete item, expand a todo, show priority (color)
