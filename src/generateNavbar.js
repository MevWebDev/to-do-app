import { generateInput } from "./generateInput";
import { generateProjects } from "./generateProjects";
export function generateNavbar(toDoList) {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-button";
  addProjectButton.classList = "project";
  addProjectButton.textContent = "+ Add Project";
  addProjectButton.addEventListener("click", () => generateInput(toDoList));
  projectsDiv.appendChild(addProjectButton);
  generateProjects();
}
