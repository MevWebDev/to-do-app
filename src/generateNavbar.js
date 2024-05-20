import { addProject } from "./addProject";
export function generateNavbar(toDoList) {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-button";
  addProjectButton.classList = "project";
  addProjectButton.textContent = "+ Add Project";
  addProjectButton.addEventListener("click", () => addProject(toDoList));
  projectsDiv.appendChild(addProjectButton);

  toDoList.projects.forEach((project) => {
    const projectDiv = document.createElement("button");
    projectDiv.classList = "project";
    projectDiv.textContent = project.name;
    projectsDiv.appendChild(projectDiv);
  });
}
