import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-amber-400'>Sujit Kumar Singh</h1>
      </div>
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
