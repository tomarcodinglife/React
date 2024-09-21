const newElementObject = {
    type : "a",
    properties : {
        href : "http://google.com",
        target : "_blank"
    },
    innerHTML : "<p>Click Me</p>"
}


function customRender (newElementObject, container) {
    const docElement = document.createElement(newElementObject.type)
    docElement.innerHTML = newElementObject.innerHTML
    docElement.setAttribute("href", newElementObject.properties.href)
    docElement.setAttribute("target", newElementObject.properties.target)
    container.appendChild(docElement)
}

const mainContainer = document.querySelector("#root")

customRender(newElementObject, mainContainer)