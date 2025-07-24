import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header'
import WhatWeDo from './pages/WhatWeDo'
import LeanForward from './pages/LeanForward'
import Careers from './pages/Careers'
import About from './pages/About'
import Investors from './pages/Investors'
import ContactForm from './pages/Contact-Form'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<WhatWeDo/>}/>
        <Route path='/lean-forward' element={<LeanForward/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/investors' element={<Investors/>}/>
        <Route path='/contact-us' element={<ContactForm/>}/>
      </Routes>
    </>
  )
}

export default App
