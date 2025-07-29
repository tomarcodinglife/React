import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Users from './pages/Users'
import Contact from './pages/Contact'
import UserDetails from './pages/data/UserDetails'

function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/users' element={<Users/>}/>
          <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
      

    </>
  )
}

export default App
