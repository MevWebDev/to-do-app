import { generateTodos } from "./generateTodos";
import { state } from "./index";
import { saveData } from "./webstorage";
export function finishTodo(finishedTodo) {
  state.currentProject.finished.push(finishedTodo);
  state.currentProject.todos = state.currentProject.todos.filter((todo) => {
    return todo != finishedTodo;
  });
  generateTodos();
  saveData();
}

export function deleteTodo(deletedTodo) {
  state.currentProject.todos = state.currentProject.todos.filter((todo) => {
    return todo != deletedTodo;
  });
  generateTodos();
  saveData();
}
