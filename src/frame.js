export default function frame() {
    const divFrame = document.createElement('div')
    divFrame.id = "container"
    divFrame.innerHTML = `<div id="header"><h1>To-do list</h1></div><div id="main"></div><div id=footer></div>`;
    return divFrame
}