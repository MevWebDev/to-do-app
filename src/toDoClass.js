export class ToDo {
  constructor(title, description, dueDate, priority) {
    (this.title = title),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priority),
      (this.notes = ""),
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
  toggleFinished() {
    this.finished = !this.finished;
  }
}
