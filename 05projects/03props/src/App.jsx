import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-amber-400'>Sujit Kumar Singh</h1>
      </div>
      <div className='flex justify-center items-center m-5'>
        <Card card_profile_Name = "Sujit Tomar" card_work_type = "Software Engineer" />
        <Card card_profile_Name = "Rohit Singh" card_work_type = "UI UX Engineer" />
        <Card card_profile_Name = "Aman Kumar" card_work_type = "DevOps Engineer" />
      </div>
    </>
  )
}

export default App
