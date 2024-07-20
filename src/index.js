import "./style.scss";
import { ToDoList } from "./toDoList.js";
import { Project } from "./toDoProject.js";
import { ToDo } from "./toDoClass.js";
import { generateNavbar } from "./generateNavbar.js";
import { generatePopup } from "./generatePopup.js";
import { generateTodos } from "./generateTodos.js";
import { loadStorage, saveData } from "./webstorage.js";
import { generateProjects } from "./generateProjects.js";
import { generateActivityLog } from "./activitylog.js";
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

const activityLog = document.querySelector(".activity-log-button");
activityLog.addEventListener("click", () => {
  console.log("activity log clicked");
  generateActivityLog();
});
saveData();
