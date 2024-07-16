import "./style.scss";
import { ToDoList } from "./toDoList.js";
import { Project } from "./toDoProject.js";
import { ToDo } from "./toDoClass.js";
import { generateNavbar } from "./generateNavbar.js";
import { generatePopup } from "./generatePopup.js";
import { generateTodos } from "./generateTodos.js";
import { loadStorage } from "./webstorage.js";
export const toDoList = new ToDoList();

console.log(toDoList);
loadStorage();
generateNavbar(toDoList);

export const state = {
  currentProject: toDoList.projects[0],
};
generateTodos();
console.log(state);

const addToDoButton = document.querySelector(".add-todo");
addToDoButton.addEventListener("click", generatePopup);
