import { state } from "./index.js";
const todoList = document.querySelector("#todo-list");
export function generateTodos() {
  todoList.innerHTML = "";
  state.currentProject.todos.forEach((todo) => {
    let borderColor;
    switch (todo.priority) {
      case "low":
        borderColor = "green";
        break;
      case "medium":
        borderColor = "orange";
        break;
      case "high":
        borderColor = "red";
        break;
      default:
        borderColor = "black";
    }
    console.log(todo);
    const todoDiv = document.createElement("div");

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;

    const todoDesc = document.createElement("p");
    todoDesc.textContent = todo.description;

    const todoDate = document.createElement("p");
    todoDate.textContent = todo.dueDate;

    todoDiv.style.border = `3px solid ${borderColor}`;

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDesc);
    todoDiv.appendChild(todoDate);
    todoList.appendChild(todoDiv);
  });
}
