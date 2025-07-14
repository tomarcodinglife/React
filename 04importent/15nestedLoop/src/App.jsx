import { useState } from 'react'
import College from './components/College'
import Data from './components/data'

const myFun = (name) => {
  console.log(name);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Test</h1>
       <div>
        {
          Data.map((college, index) => {
            return (
              <College key={index} data={college} />
            )
          })
        }
       </div>
    </>
  )
}

export default App
