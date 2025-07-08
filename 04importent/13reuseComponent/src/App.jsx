import { useState } from 'react'
import Data from './components/data'
import User from './components/User'

const userDivStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  backgroundColor: "#edf7f7",
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Reuse Component</h1>
      <div style={userDivStyle}>
        {
          Data.map((user) => (
            <User key={user.id} data={user} />
          ))
        }
      </div>
      </div>
    </>
  )
}

export default App
