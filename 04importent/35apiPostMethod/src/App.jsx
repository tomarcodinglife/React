import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Users from './pages/Users'
import Heder from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heder/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/users' element={<Users/>} />
      </Routes>
    </>
  )
}

export default App
