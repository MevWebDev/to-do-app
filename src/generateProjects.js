import { toDoList } from "./index";
import { state } from "./index";
import { generateTodos } from "./generateTodos";
export function generateProjects() {
  const projectsDiv = document.querySelector("#projects");
  toDoList.projects.forEach((project) => {
    const projectDiv = document.createElement("button");
    if (toDoList.projects.length == 1) {
      projectDiv.classList = "project active";
    } else projectDiv.classList = "project";
    projectDiv.textContent = project.name;
    projectsDiv.appendChild(projectDiv);
    projectDiv.addEventListener("click", () => {
      projectsDiv.childNodes.forEach((node) => {
        node.classList.remove("active");
      });
      projectDiv.classList.add("active");
      state.currentProject = toDoList.projects.find(
        (projectName) => project.name === projectName.name
      );
      generateTodos();
      console.log(state.currentProject);
    });
  });
}
