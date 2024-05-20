import "./style.scss";

class ToDo {
  constructor(title, description, dueDate, priority, notes) {
    (this.title = title),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priority),
      (this.notes = notes),
      (this.finished = false);
  }
  updateTitle(title) {
    this.title = title;
  }
  updateDescription(description) {
    this.description = description;
  }
  updateDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  updatePriority(priority) {
    this.priority = priority;
  }
  updateNotes(notes) {
    this.notes = notes;
  }
}

class ToDoList {
  constructor() {
    this.projects = [new Project("general")];
  }
  addProject(name) {
    this.projects.push(new Project(name));
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  addToDo(title, desc, dueDate, priority, notes) {
    this.todos.push(new ToDo(title, desc, dueDate, priority, notes));
  }
}

const toDoList = new ToDoList();
toDoList.addProject("Project 1");
toDoList.projects[0].addToDo(
  "Finish this project",
  "Finish this project",
  "2021-08-31",
  "high",
  "Finish this project"
);
console.log(toDoList);
