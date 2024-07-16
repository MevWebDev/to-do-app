import { generateNavbar } from "./generateNavbar.js";
import { generateTodos } from "./generateTodos.js";
import { toDoList } from "./index.js";
import { ToDo } from "./toDoClass.js";
import { Project } from "./toDoProject.js";
export function saveData() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  console.log("saved data");
}

export function loadStorage() {
  let storedData = localStorage.getItem("toDoList");
  if (storedData) {
    let parsedData = JSON.parse(storedData);

    toDoList.projects = parsedData.projects.map((project) => {
      let newProject = new Project(project.name, project.todos);
      newProject.todos = project.todos.map(
        (todo) =>
          new ToDo(todo.title, todo.description, todo.dueDate, todo.priority)
      );
      return newProject;
    });
  }
}
