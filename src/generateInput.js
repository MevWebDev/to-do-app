import { toDoList } from "./index.js";
import { generateNavbar } from "./generateNavbar.js";
import { saveData } from "./webstorage.js";
import { generateProjects } from "./generateProjects.js";
export function generateInput(list) {
  const addProjectButton = document.querySelector("#add-button");

  const input = document.createElement("div");
  input.id = "input-field";
  const inputField = document.createElement("input");
  inputField.placeholder = "Project name";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.id = "button-wrapper";

  const inputConfirmButton = document.createElement("button");
  inputConfirmButton.textContent = "Confirm";
  inputConfirmButton.addEventListener("click", () => {
    const projectName = inputField.value;
    if (projectName) {
      list.addProject(projectName);
      saveData();
    }
    generateNavbar(list);
    generateProjects();
  });

  const inputCancelButton = document.createElement("button");
  inputCancelButton.textContent = "Cancel";
  inputCancelButton.addEventListener("click", () => {
    input.replaceWith(addProjectButton);
  });

  input.appendChild(inputField);
  buttonWrapper.appendChild(inputConfirmButton);
  buttonWrapper.appendChild(inputCancelButton);
  input.appendChild(buttonWrapper);

  addProjectButton.replaceWith(input);
}
