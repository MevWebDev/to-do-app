import "./style.scss";
import { ToDoList } from "./toDoList.js";
import { Project } from "./toDoProject.js";
import { ToDo } from "./toDoClass.js";
import { generateNavbar } from "./generateNavbar.js";
export const toDoList = new ToDoList();
toDoList.addProject("Project 1");
toDoList.projects[0].addToDo(
  "Finish this project",
  "Finish the project about To-Do-App",
  "2021-08-31",
  "high",
  "Notatki "
);
toDoList.projects.forEach((project) => {
  console.log(project.name);
  project.todos.forEach((todo) => {
    console.log(todo.title);
  });
});
generateNavbar(toDoList);
