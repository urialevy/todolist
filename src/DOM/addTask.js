import { Project, returnActive, projectsArray } from "../DATA/projects"
import { Task } from "../DATA/tasks"
import { updateTasks } from "./loadPage"

export const formListener = (node) => {
    let currentProject = returnActive(projectsArray);
            node.addEventListener('submit', function(e) {
            e.preventDefault()
            let submissionValue = node.querySelector('.taskInput').value
                currentProject.addTask(submissionValue); updateTasks()
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


