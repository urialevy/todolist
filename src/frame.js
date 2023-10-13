export default function frame() {
    const divFrame = document.createElement('div')
    divFrame.id = "container"
    divFrame.innerHTML = `<div id="header">HEAD</div><div id="main">MAIN</div><div id=footer>FOOT</div>`;
    return divFrame
}