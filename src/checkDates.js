import { toDoList } from "./index";

export function checkDates() {
  const today = new Date();
  toDoList.projects.forEach((project) => {
    const expiredTodos = project.todos.filter((todo) => {
      return today > new Date(todo.dueDate);
    });
    project.todos = project.todos.filter((todo) => {
      return today < new Date(todo.dueDate);
    });
    expiredTodos.forEach((todo) => {
      // Check that todo is defined and has a priority property
      toDoList.addActivityLog(todo, today.toLocaleString(), `expired`);
    });
  });
}
