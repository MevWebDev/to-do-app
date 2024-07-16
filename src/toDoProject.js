import { ToDo } from "./toDoClass.js";
export class Project {
  constructor(name, data) {
    this.name = name;
    this.todos = [] || data;
  }
  addToDo(title, desc, dueDate, priority) {
    this.todos.push(new ToDo(title, desc, dueDate, priority));
  }
}
