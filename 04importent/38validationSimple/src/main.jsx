import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ReactBrowser } from 'react-dom'

createRoot(document.getElementById('root')).render(
    <ReactBrowser>
      <App />
    </ReactBrowser>
)
