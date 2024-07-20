import { state, toDoList } from "./index";
import { saveData } from "./webstorage";
export function addToDo(title, description, dueDate, priority) {
  const project = toDoList.projects.find(
    (project) => project.name == state.currentProject.name
  );

  project.addToDo(title, description, dueDate, priority);

  saveData();
}
