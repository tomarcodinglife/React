import { useState } from 'react'
import User from './User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <User> 
        <h1>Sujit Tomar</h1>
      </User>
      <hr />
      <User color='red'>
          <h1>Hi Sujit Kumar Singh </h1>
      </User>
      <hr />
      <User color='blue'>
          <h1>Hi User </h1>
      </User>
    </div>
  )
}

export default App
