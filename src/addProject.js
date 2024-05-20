import { toDoList } from "./index.js";
import { generateNavbar } from "./generateNavbar.js";

export function addProject(list) {
  const addProjectButton = document.querySelector("#add-button");
  console.log(addProjectButton);

  const input = document.createElement("div");
  input.id = "input-field";
  const inputField = document.createElement("input");
  inputField.placeholder = "Project name";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.id = "button-wrapper";

  const inputConfirmButton = document.createElement("button");
  inputConfirmButton.textContent = "Confirm";

  const inputCancelButton = document.createElement("button");
  inputCancelButton.textContent = "Cancel";

  input.appendChild(inputField);
  buttonWrapper.appendChild(inputConfirmButton);
  buttonWrapper.appendChild(inputCancelButton);
  input.appendChild(buttonWrapper);

  addProjectButton.replaceWith(input);
}
