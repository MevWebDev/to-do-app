import { state } from "./index.js";
import { finishTodo } from "./todoManagement.js";
import { deletePopup } from "./deletePopup.js";
export function generateTodos() {
  const todoList = document.querySelector("#todo-list");
  console.log("Loading todos");
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
    todoDiv.appendChild(todoTitle);

    if (todo.description) {
      const todoDesc = document.createElement("p");
      todoDesc.textContent = todo.description;
      todoDiv.appendChild(todoDesc);
    }

    const todoDate = document.createElement("p");
    todoDate.textContent = todo.dueDate;

    todoDiv.style.border = `3px solid ${borderColor}`;

    todoDiv.appendChild(todoDate);

    const bottomButtons = document.createElement("div");

    const editButton = document.createElement("button");
    editButton.classList = "todo-button";
    editButton.textContent = "edit";
    bottomButtons.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "todo-button delete-button";
    deleteButton.innerHTML = `<i class="gg-trash"></i>`;
    deleteButton.addEventListener("click", () => {
      deletePopup(todo);
    });

    todoDiv.appendChild(deleteButton);

    const finishedButton = document.createElement("button");
    finishedButton.classList = "todo-button";
    finishedButton.textContent = "finished";
    finishedButton.addEventListener("click", () => {
      console.log("Franiolo");
      finishTodo(todo);
    });
    bottomButtons.appendChild(finishedButton);

    todoDiv.appendChild(bottomButtons);

    todoList.appendChild(todoDiv);
  });
}
