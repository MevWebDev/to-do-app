import "./style.scss";
import { ToDoList } from "./toDoList.js";
import { Project } from "./toDoProject.js";
import { ToDo } from "./toDoClass.js";
import { generateNavbar } from "./generateNavbar.js";
import { generatePopup } from "./generatePopup.js";
import { generateTodos } from "./generateTodos.js";

export const toDoList = new ToDoList();

toDoList.projects[0].addToDo(
  "Finish this project",
  "Finish the project about To-Do-App",
  "2021-08-31",
  "high"
);

generateNavbar(toDoList);
export const state = {
  currentProject: toDoList.projects[0],
};
toDoList.projects[0].className = "active";
const addToDoButton = document.querySelector(".add-todo");
addToDoButton.addEventListener("click", generatePopup);

generateTodos();
