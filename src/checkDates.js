import { toDoList } from "./index";

export function checkDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  toDoList.projects.forEach((project) => {
    const expiredTodos = project.todos.filter((todo) => {
      return today > new Date(todo.dueDate);
    });
    project.todos = project.todos.filter((todo) => {
      return today < new Date(todo.dueDate);
    });
    expiredTodos.forEach((todo) => {
      toDoList.addActivityLog(todo, todo.dueDate.toLocaleString(), `expired`);
    });
  });
}
