import { ToDo } from "./toDoClass.js";
export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  addToDo(title, desc, dueDate, priority) {
    this.todos.push(new ToDo(title, desc, dueDate, priority));
  }
}
