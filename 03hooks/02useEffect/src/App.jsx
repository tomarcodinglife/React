import { useState } from 'react'
import Addition from './components/Addition'

function App() {
  const [num1, seNum1] = useState(0)
  const [num2, seNum2] = useState(0)

  const handleChange1 = (e) => (
    seNum1(e.target.value) // Update num1 state with the input value
  )

  const handleChange2 = (e) => (
    seNum2(e.target.value) // Update num2 state with the input value
  )


  return (
    <>
      <h1>Addition Function</h1>
      <div>
        <label htmlFor="">Number1</label>
        <input type="number" value={num1} onChange={handleChange1} />
      </div>
      <br />
      <div>
        <label htmlFor="">Number2</label>
        <input type="number" value={num2} onChange={handleChange2} />
      </div>

      <br />
      <Addition a={num1} b={num2} />
    </>
  )
}

export default App
