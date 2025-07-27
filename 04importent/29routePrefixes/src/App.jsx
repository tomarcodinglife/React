import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Home from '../../28layoutAndIndexRoutes/src/pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignIn from './pages/Users/SignIn'
import SignUp from './pages/Users/SignUp'
import ForgatePassword from './pages/Users/ForgatePassword'


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
              <Route path='/user' element={<Login/>}/>
              {/* below user is prefix for signin, signup and forgate page */}
              <Route path='user' element={<Login/>}>
                  <Route index element={<SignIn/>}/>
                  <Route path='/user/signup' element={<SignUp/>}/>
                  <Route path='/user/forgatepassword' element={<ForgatePassword/>}/>
              </Route>
      </Routes>
    </>
  )
}

export default App
