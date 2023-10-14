export function framework() {
    const divFrame = document.createElement('div')
    divFrame.id = "container"
    divFrame.innerHTML = `<div id="header"><h1>To-do list</h1></div><div id="main"><div id="mainleft"><div><h1>Projects</h1></div><div></div><div><button id="newTask"><h2>+ Add Project</h2></button></div></div><div id="mainright"></div></div><div id=footer></div>`;
    return divFrame
}
export function appendNodeToBody(node) {
    document.body.appendChild(node)
}