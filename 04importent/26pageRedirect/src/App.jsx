import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1> Page Redirect Using React Router</h1>} />
      </Routes>
    </>
  )
}

export default App
