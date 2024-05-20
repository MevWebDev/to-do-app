import { toDoList } from "./index.js";
export function generateNavbar(toDoList) {
  const projectsDiv = document.querySelector("#projects");
  const navList = document.createElement("ul");
  toDoList.projects.forEach((project) => {
    const projectDiv = document.createElement("li");
    projectDiv.textContent = project.name;
    navList.appendChild(projectDiv);
    projectsDiv.appendChild(navList);
  });
}
