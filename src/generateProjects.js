import { toDoList } from "./index";
import { state } from "./index";
import { generateTodos } from "./generateTodos";
import { deleteProject } from "./projectManagement";
import { generateNavbar } from "./generateNavbar";

export function generateProjects() {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  generateNavbar(toDoList);
  toDoList.projects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    const projectsDelete = document.createElement("button");
    projectsDelete.style.opacity = "0%";
    projectsDelete.classList = "project-delete-button";
    projectsDelete.innerHTML = `<i class="fa fa-trash-o" style="font-size:1.5rem;"></i>`;

    if (index == 0) {
      projectDiv.classList = "project active";
    } else projectDiv.classList = "project";
    projectDiv.textContent = project.name;
    projectDiv.appendChild(projectsDelete);
    projectDiv.addEventListener("mouseover", () => {
      projectsDelete.style.opacity = "100%";
    });
    projectDiv.addEventListener("mouseout", () => {
      projectsDelete.style.opacity = "0%";
    });

    projectsDiv.appendChild(projectDiv);
    projectDiv.addEventListener("click", () => {
      console.log("clicked");
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

    projectsDelete.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteProject(project);
    });
  });
}
