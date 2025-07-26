import { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Student from './pages/login/Student'
import University from './pages/login/University'
import College from './pages/login/College'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}

      <Routes>

        <Route element={<Header/>}>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Route>


        <Route path='/login' element={<Login/>}>
            <Route index element={<Student/>}/>
            <Route path='college' element={<College/>}/>
            <Route path='university' element={<University/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
