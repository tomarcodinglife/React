import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>

      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        {/* For Not Available URL Path You Can Use This Way User Handle*/}
          {/* Method 01 */}
        {/* <Route path="/*" element={<NotFoundPage/>} />   */}
          {/* Method 02 */}
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
