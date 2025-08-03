import { useState } from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Users from './Pages/Users'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/users' element={<Users/>}/>
      </Routes>
    </>
  )
}

export default App
