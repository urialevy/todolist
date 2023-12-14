import { Project } from "../DATA/projects";
import { Task } from "../DATA/tasks";
import { placeHolder } from "../DATA/projects";
import { projOne } from "../DATA/projects";

export function framework() {
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
                <div id="taskTitle"><h2>Tasks</h2></div>
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
export const getProjTitles = (arr) => {
  let titlesArr = [];
  arr.forEach((element) => {
    titlesArr.push(element.title);
  });
  return titlesArr;
};

export const injectProjHtml = (titlesArray) => {
  let projectsList = document.querySelector("#projectsList");
  let projectNodeArr = [];
  for (let i = 0; i < titlesArray.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("project");
    projectsList.appendChild(divNode);
    projectNodeArr.push(divNode);
    projectNodeArr[i].innerHTML = `${titlesArray[i]}`;
  }
};

export const injectTaskHtml = (projArray, index) => {
  let taskNode = document.querySelector("#tasksList");
  let taskArr = [];
  taskNode.innerHTML = ``
  for (let i = 0; i < projArray[index].tasksList.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("task");
    taskNode.appendChild(divNode);
    taskArr.push(divNode);
    taskArr[i].innerHTML = `${projArray[index].tasksList[i]} <div class="taskMan"><button class ="delbtn">🗑️</button><button class="completebtn">✔</button><button class="editbtn">🖊️</button></div>`;
  }
};

export const navigateProjects = () => {
  // get an array of the existing node list
  let nodeList = document.querySelectorAll('.project')
  // add an event listener to each one of them, they adjust the DOM to show the correct project's display
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function(e) {
      e.preventDefault()
      injectTaskHtml(placeHolder(), i);
    })
  }
}
 