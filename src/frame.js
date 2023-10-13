export default function frame() {
    const divFrame = document.createElement('div')
    divFrame.id = "container"
    divFrame.innerHTML = `<div id="header"></div><div id="main"></div><div id=footer></div>`;
    return divFrame
}