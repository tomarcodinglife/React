import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  return (
    <>
        <div>

          <h1 className='text-4xl uppercase font-semibold'>Password Generator</h1>
          <input type="text" />

        </div>
    </>
  )
}

export default App
