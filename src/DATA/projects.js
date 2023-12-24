import { el } from "date-fns/locale";
import { Task } from "./tasks";
import CompoundedSpace from "antd/es/space";
// import { saveProject } from "./storage";

export class Project {
  constructor(title, description = null, id=crypto.randomUUID()) {
    this.title = title;
    this.description = description;
    this.tasksList = [];
    this.active = Boolean;
    this.id = id;
  }

  addToStorage() {
    console.log(this)
    localStorage.setItem(`project_${localStorage.length}`, JSON.stringify(this))
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

export const projOne = new Project("Project 1", "Description");
export const projTwo = new Project("Project 2", "Some description");
const testTaskOne = new Task ("task 1 for proj 1")
const testTaskTwo = new Task ("taskIt's  2 for proj 1")
const testTaskThree = new Task ("task 1 for proj 2")
const testTaskFour = new Task("task 2 for proj 2")
projOne.addTask(testTaskOne);
projOne.addTask(testTaskTwo)
projTwo.addTask(testTaskThree);
projTwo.addTask(testTaskFour);
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

export const finishedProjects = [];


const currentProject = returnActive(projectsArray)
const projThree = new Project('Just a standalone Project')
completeProjectData(projThree)
projThree.addToStorage()

// export const saveProjects = (projArr) => {
//   localStorage.clear()
//   projArr.forEach(proj => {
//     localStorage.setItem(`project_${localStorage.length}`, JSON.stringify(proj))
//   })
// }
// saveProjects(projectsArray)