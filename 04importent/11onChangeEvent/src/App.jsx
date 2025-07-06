import { useState } from 'react'
import Form from './form'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <h1>onChange Event</h1> */}
      <Form />
    </>
  )
}

export default App
