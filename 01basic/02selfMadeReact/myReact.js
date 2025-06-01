    import { render } from "./render.js"

    let mainContainer = document.getElementById('root')


    let anchorTag = {
        tag : 'a',
        text : "Click to Google",
        attributes : {
            href : 'https://google.com',
            target: '_blank'
        }
    }

    let divtag = {
        tag : 'div',
        text : 'this is div'
    }

    render(anchorTag, mainContainer)
    render(divtag, mainContainer)