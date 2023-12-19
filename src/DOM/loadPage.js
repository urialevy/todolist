import { el } from "date-fns/locale";
import { projectsArray } from "../DATA/projects";
import { returnActive } from "../DATA/projects";
import { changeActiveProject } from "../DATA/projects";


export function framework() {
  let currentProject = returnActive(projectsArray)
  const divFrame = document.createElement("div");
  divFrame.id = "container";
  divFrame.innerHTML = `<div id="header"><h1>To-do list</h1></div>
    <div id="main">
        <div id="mainleft">
            <div id="projectTitle"><h1>Projects</h1></div>
            <div id="projectsList">
            </div>
            <div id="projectNav"><button id="newTask"><h2>+ Add Project</h2></button>
            <button id="delTask"><h2>❌ Delete Project</h2></button>
            <button id="finishTask"><h2>✔ Complete Project</h2></button></div></div>
            <div id="mainright">
                <div id="taskTitle"><div><h2>${currentProject.description}</h2></div><div><button id="addTask"><h2>+Add Task</h2></button></div></div>
                <div id="tasksContainer">
                <div id="tasksList">
            </div></div>
            </div>
            </div>
    <div id="footer"><div class="text-red-700"><p class="text-red-700">LOREM IPSUM!</p></div></div>`;
  return divFrame;
}
export function appendNodeToBody(node) {
  document.body.appendChild(node);
}


// generates DOM list of projects
export const injectProjHtml = (projArray) => {
  let projectsList = document.querySelector("#projectsList");
  projectsList.innerHTML = ``
  let projectNodeArr = [];
  for (let i = 0; i < projArray.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("project");
    divNode.id = `${projArray[i].id}`
    projectsList.appendChild(divNode);
    projectNodeArr.push(divNode);
    projectNodeArr[i].innerHTML = `${projArray[i].title}`;
  }
};

// generates list of tasks in DOM for a project
export const updateTasks = () => {
  let currentProject = returnActive(projectsArray);

  let taskNode = document.querySelector("#tasksList");
  let taskArr = [];
  if (taskNode) {
  taskNode.innerHTML = ``  
  // append tasks to the task list from the project
  for (let i = 0; i < currentProject.tasksList.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("task");
    taskArr.push(divNode);
    taskNode.appendChild(divNode)
    taskArr[i].innerHTML = `${currentProject.tasksList[i]} <div class="taskMan"><button class ="delbtn">🗑️</button><button class="completebtn">✔</button><button class="editbtn">🖊️</button></div>` 
  }}
}

export const navigateProjects = () => {
  // get an array of the existing node list
  let nodeList = document.querySelectorAll('.project')
  // add an event listener to each one of them, they adjust the DOM to show the correct project's display
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function(e) {
      e.preventDefault()
      // gets the UUID of the element using the DOM
      let UUID = nodeList[i].id
      let associatedProject = projectsArray.find(element => element.id == UUID)
      changeActiveProject(associatedProject)
      document.getElementById('mainright').innerHTML=`<div id="taskTitle"><div><h2>${associatedProject.description}</h2></div><div><button id="addTask"><h2>+Add Task</h2></button></div></div>
      <div id="tasksContainer">
      <div id="tasksList">
  </div>`
      updateTasks()
    })
  }
}
export const projBtns = () => {
  let addProjBtn = document.getElementById('newTask')
  let delProjBtn = document.getElementById('delTask')
  let finishTaskBtn = document.getElementById('finishTask')
  let secondaryMenu = false;
  addProjBtn.addEventListener('click', function(e) {
    secondaryMenu = true;
    e.preventDefault()
    let formNode = document.createElement('form')
    formNode.id = 'newProj'
    formNode.action = 'submit'
    formNode.innerHTML = `<input type="text" name="title" placeholder="Project title (required)" required><input type="text" placeholder="Project description"><div id="formNav"><input type="submit"></input><button>Cancel</button></div>`
    document.getElementById('mainright').innerHTML = ``
    document.getElementById('mainright').appendChild(formNode)
    formNode.addEventListener('submit', function(e) {
      e.preventDefault()
    })
    }
    
  )

  delProjBtn.addEventListener('click', function(e) {
    e.preventDefault()
    let currentProject = returnActive(projectsArray);
    let index = projectsArray.indexOf(currentProject)
    if (secondaryMenu) {
      secondaryMenu = false
      document.getElementById('mainright').innerHTML=``
    }
    else {
      projectsArray.splice(index, 1)
      if (projectsArray.length > 0) {
        changeActiveProject(projectsArray[0])
        updateTasks()
        injectProjHtml(projectsArray)
      }
     else {
      document.getElementById('projectsList').innerHTML = ``
      document.getElementById('mainright').innerHTML=``
     }

    }
  })
  
}