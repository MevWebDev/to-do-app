import "./style.scss";
import { ToDoList } from "./toDoList.js";
import { Project } from "./toDoProject.js";
import { ToDo } from "./toDoClass.js";
import { generateNavbar } from "./generateNavbar.js";
import { generatePopup } from "./generatePopup.js";
import { generateTodos } from "./generateTodos.js";
import { loadStorage } from "./webstorage.js";
import { generateProjects } from "./generateProjects.js";
export const toDoList = new ToDoList();

loadStorage();
generateNavbar(toDoList);
generateProjects(toDoList);
export const state = {
  currentProject: toDoList.projects[0],
};
generateTodos();

const addToDoButton = document.querySelector(".add-todo");
addToDoButton.addEventListener("click", generatePopup);
