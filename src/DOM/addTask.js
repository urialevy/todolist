export const addForm = () => {
    let nodeList = document.querySelectorAll('.task')
    let formNode = document.createElement('div')
    formNode.classList.add('task')
    let tasksList = document.getElementById('tasksList')
    formNode.innerHTML = `<form action="" class="taskForm"><div><label for:"description"></label><input type="text" placeholder="Type your task here..." name="taskDescription"></div><div><input type="submit" value="Save"><button>Cancel</button></div></form>`
    tasksList.appendChild(formNode)
}
