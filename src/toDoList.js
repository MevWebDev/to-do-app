import { Project } from "./toDoProject.js";

export class ToDoList {
  constructor() {
    this.projects = [new Project("General")];
    this.activityLog = [];
  }
  addProject(name) {
    this.projects.push(new Project(name));
  }
  addActivityLog(message, time, state) {
    this.activityLog.push([message, time, state]);
  }
}
