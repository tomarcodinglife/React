import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './Pages/About'
import Course from './pages/Course'
import Contact from './pages/Contact'



function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Course/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
