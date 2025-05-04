import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Sujit from './sujit.jsx'
import Tomar from './tomar.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Sujit/>
    <Tomar/>
    <h1>I am Learnign JSX or React</h1>
  </>
)
