import { Project } from "./toDoProject.js";

export class ToDoList {
  constructor() {
    this.projects = [new Project("general")];
  }
  addProject(name) {
    this.projects.push(new Project(name));
  }
}
