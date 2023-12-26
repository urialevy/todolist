import { Project, returnActive, projectsArray, changeActiveProject } from "../DATA/projects"
import { Task } from "../DATA/tasks"
import { recreateDOM, updateTasks } from "./loadPage"

export const formListener = (node) => {
            node.addEventListener('submit', function(e) {
            e.preventDefault()
            let currentProject = returnActive(projectsArray)
            let submissionValue = node.querySelector('.taskInput').value
            let newTask = new Task(submissionValue)
            currentProject.tasksList.push(newTask)
            recreateDOM()
        })        
    }


export const addForm = () => {
    let formNode = document.createElement('div')
    formNode.classList.add('task')
    let tasksList = document.getElementById('tasksList')
    formNode.innerHTML = `<form action="" class="taskForm"><div><label for:"description"></label><input type="text" placeholder="Type your task here..." class="taskInput" name="taskDescription" required></div><div><input type="submit" value="Save"><button class="cancelbtn">Cancel</button></div></form>`
    tasksList.appendChild(formNode)
    formListener(formNode)    
}
const cancelBtns = () => {
    let formCancelBtns = document.querySelectorAll('.cancelbtn')
    formCancelBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault()
            btn.parentElement.parentElement.parentElement.remove()
        })
    })
}    

export const addTaskBtn = () => {
    let addTaskBtn = document.getElementById('addTask')
    addTaskBtn.addEventListener('click', function(e) {
        e.preventDefault()
        addForm()
        cancelBtns()
    })
}