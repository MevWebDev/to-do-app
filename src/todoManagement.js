import { generateTodos } from "./generateTodos";
import { state } from "./index";
import { saveData } from "./webstorage";
import { toDoList } from "./index";
export function finishTodo(finishedTodo) {
  const currentTime = new Date().toLocaleString();
  toDoList.addActivityLog(finishedTodo, currentTime, `finished`);
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
