import css from "./style.css"
function popText() {
    const textNode = document.createElement('p')
    textNode.innerHTML = `<p>Hello world!</p>`
    document.body.appendChild(textNode)
}

popText()