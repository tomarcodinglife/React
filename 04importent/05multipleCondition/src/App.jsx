import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increace Count</button>
      <button onClick={()=>{setCount(count-1)}}>Decreace Count</button>
      {
        count == 0 ? (<p>Condition 0</p>):
        count == 1 ? (<p>Condition 1</p>) :
        count == 2 ? (<p>Condition 2</p>) :
        count == 3 ? (<p>Condition 3</p>) :
        count == 4 ? (<p>Condition 4</p>) :
        count == 5 ? (<p>Condition 5</p>) :
        (<p>No Condition Available</p>)
      }
    </>
  )
}

export default App
