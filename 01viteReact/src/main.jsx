import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const elementFirst = (
  <a href="http://google.com" target='blank'> Google </a>
)


const elementSecond = React.createElement(
  'a',
  { href:'http://yahoo.com', target:`_blank`},
  'Yahoo'
)

createRoot(document.getElementById('root')).render(
  <> 
    <App />
    <Sujit/>
    <Tomar/>
    {elementFirst}
    {elementSecond}
    <h1>I am Learnign JSX or React</h1>
  </>
)

// createRoot(document.getElementById('root')).render(
//     elementSecond
// )
