import { useState } from 'react'
import User from './User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Props in React</h1>
      <User name={"Sujit"} Branch={"CSE"} />
    </>
  )
}

export default App
