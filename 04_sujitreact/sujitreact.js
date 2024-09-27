const div = document.querySelector("#root")

function newElementMethod (ElementLibrary, container) {
    newElement = document.createElement(ElementLibrary.tagName)
    newElement.innerHTML = ElementLibrary.tagInnerHtml
    for (const properties in ElementLibrary.tagAttribute) {
        if (properties==="Children") continue; 
            newElement.setAttribute(properties, ElementLibrary.tagAttribute[properties])
    }
    container.appendChild(newElement)
}


const newElementLibrary = {
    tagName : "a",
    tagInnerHtml : "Click Here",
    tagAttribute : {
        href : "http://google.com",
        target : "_blank"
    }
}




newElementMethod(newElementLibrary, div)


