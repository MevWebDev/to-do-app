import { toDoList } from "./index";
import { generateProjects } from "./generateProjects";
import { generateTodos } from "./generateTodos";
import { state } from "./index";
import { saveData } from "./webstorage";
export function deleteProject(project) {
  console.log("Properly clicked");
  if (project.name !== "general ") {
    toDoList.projects = toDoList.projects.filter(
      (projectName) => project !== projectName
    );

    state.currentProject = toDoList.projects[0];
    console.log(state.currentProject);
    generateProjects();
    generateTodos();
    saveData();
  }
}
