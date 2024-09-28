console.log("Hi")

function rander (ElementLibrary, container) {
    newElement = document.createElement(ElementLibrary.tagName)
    newElement.innerHTML = ElementLibrary.tagInnerHtml
    for (const properties in ElementLibrary.tagAttribute) {
        if (properties==="Children") continue; 
            newElement.setAttribute(properties, ElementLibrary.tagAttribute[properties])
    }
    container.appendChild(newElement)
}