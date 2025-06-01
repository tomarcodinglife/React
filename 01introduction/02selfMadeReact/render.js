
export 
    function render (element, container){
        let tag = document.createElement(element.tag)
        tag.innerHTML = element.text
            if (element.attributes){
                for (const attribute in element.attributes) {
                    tag.setAttribute(attribute, element.attributes[attribute])
            } 
        }
        container.appendChild(tag)
    }