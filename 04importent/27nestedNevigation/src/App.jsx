import { useState } from 'react'
import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/courses'
import Career from './pages/Career'
import Login from './pages/Login'
import Contact from './pages/contact'
import Student from './pages/login/Student'
import College from './pages/login/College'
import University from './pages/login/University'


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
        <Route path='/career' element={<Career/>}/>

        <Route path='/login' element={<Login/>}>
          <Route path='college' element={<College/>}/>
          
          {/* index use for default page open at click when i go to login than student login page opent*/}
          <Route index element={<Student/>}/>  

          <Route path='university' element={<University/>}/>
        </Route>

        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </>
  )
}

export default App
