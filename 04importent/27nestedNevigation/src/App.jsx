import { useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/courses'
import Career from './pages/Career'
import Login from './pages/Login'
import Contact from './pages/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/' element={<Courses/>}/>
        <Route path='/' element={<Contact/>}/>
        <Route path='/' element={<Career/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
