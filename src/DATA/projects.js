import { el } from "date-fns/locale";
import { Task } from "./tasks";
import CompoundedSpace from "antd/es/space";
import { recreateDOM } from "../DOM/loadPage";
// import { saveProject } from "./storage";



export class Project {
  constructor(title, description = null, id=crypto.randomUUID()) {
    this.title = title;
    this.description = description;
    this.tasksList = [];
    this.active = false;
    this.id = id;
  }

  addToStorage() {
    localStorage.setItem(`project_${this.id}`,JSON.stringify(this))
    console.log(JSON.parse(localStorage.getItem(`project_${this.id}`)))
  }

  addTask(task) {
    this.tasksList.push(task);
  }
  removeTask(task) {
    const taskIndex = this.tasksList.indexOf(task);
    if (taskIndex !== -1) {
      this.tasksList.splice(taskIndex, 1);
    }
  }
}

// creates array of all projects and returns items to it. Used whenever a project is created or deleted.
export let projectsArray = []

export const completeProjectData = (proj) => {
  projectsArray.push(proj)
}

export const returnActive = (arr) => {
  let activeProj = ""
  arr.forEach(element => {
    element.active == true ? activeProj = element : element.active = false;
  })
  return activeProj
}
const currentProject = returnActive(projectsArray)

export const changeActiveProject = (proj) => {
  projectsArray.forEach(project => {
    project.active = false
  })
  proj.active = true
}

export const finishedProjects = [];

export function loadProjectsFromLocalStorage() {
  if (localStorage.length == 0 || JSON.parse(localStorage.getItem('projArr')).length == 0) {
    let projOne = new Project("Project 1", "Description");
    let projTwo = new Project("Project 2", "Some description");
    let testTaskOne = new Task ("task 1 for proj 1")
    let testTaskTwo = new Task ("taskIt's  2 for proj 1")
    let testTaskThree = new Task ("task 1 for proj 2")
    let testTaskFour = new Task("task 2 for proj 2")
    let projThree = new Project('Just a standalone Project')
    projOne.addTask(testTaskOne);
    projOne.addTask(testTaskTwo)
    projTwo.addTask(testTaskThree);
    projTwo.addTask(testTaskFour);
    projOne.active = true
    projectsArray.push(projOne, projTwo, projThree)
    localStorage.setItem('projArr', JSON.stringify(projectsArray))
  }
  else {
    projectsArray = JSON.parse(localStorage.getItem('projArr'))
    
  }
}

loadProjectsFromLocalStorage()