import { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Users from './pages/Users'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'


function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
 
          {/* Static Option  */}
          <Route path='/users/list?' element={<Users/>}/>
          {/* dynamic route */}
          <Route path='/users/:id/:name?' element={<UserDetails/>}/>
      </Routes>
    </>
  )
}

export default App
