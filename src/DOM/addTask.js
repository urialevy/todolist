export const addForm = () => {
    let nodeList = document.querySelectorAll('.task')
    let formNode = document.createElement('div')
    formNode.classList.add('task')
    let tasksList = document.getElementById('tasksList')
    formNode.innerHTML = `<form action="" class="form-class"><label for:"description"></label></form>`
    tasksList.appendChild(formNode)
}