import { el } from "date-fns/locale";

export class Project {
  constructor(title, description = "", dueDate = null) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.tasksList = [];
    this.active = Boolean;
    this.id = crypto.randomUUID()
  }
  addTask(task) {
    this.tasksList.push(task);
  }
  removeTask(task) {
    const taskIndex = this.tasksList.indexOf(task);
    if (taskIndex !== -1) {
      this.tasksList.splice(taskIndex, 11);
    }
  }
}

export const projOne = new Project("Project 1", "Description", "12.31.2023");
export const projTwo = new Project("Project 2", "Some description", "");
projOne.addTask("task 1 for proj 1");
projOne.addTask("task 2 for proj 1", "with a description");
projTwo.addTask("Task 1 for proj 2");
projOne.active = true;
// creates array of all projects and returns items to it. Used whenever a project is created or deleted.
export const projectsArray = []

export const completeProjectData = (proj) => {
  projectsArray.push(proj)
}
completeProjectData(projOne)
completeProjectData(projTwo)
export const returnActive = (arr) => {
  let activeProj = ""
  arr.forEach(element => {
    element.active == true ? activeProj = element : element.active = false;
  })
  return activeProj
}

export const changeActiveProject = (proj) => {
  projectsArray.forEach(project => {
    project.active = false
  })
  proj.active = true
}
changeActiveProject(projTwo)