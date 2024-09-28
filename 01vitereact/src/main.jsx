import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime"

function MyApp () {
  return (
    <div>
      <h1>My Custom App</h1>
    </div>
  )
}

// const anotherElement = (
//     <a href="http://google.com" target='_blank'>Visit Google</a>
// );


const reactElement = React.createElement("a",{href:"https://google.com", taget:"_blank"}, "Visit Google");

createRoot(document.getElementById('root'))
.render(

  // anotherElement

  <StrictMode>
    <MyApp />
    <App/>
    {reactElement}
  </StrictMode>
)
