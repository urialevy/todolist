export function framework() {
    const divFrame = document.createElement('div')
    divFrame.id = "container"
    divFrame.innerHTML = `<div id="header"><h1>To-do list</h1></div><div id="main"><div><button id="newTask">+</button>add task</div><div></div></div><div id=footer></div>`;
    return divFrame
}
export function appendNodeToBody(node) {
    document.body.appendChild(node)
}