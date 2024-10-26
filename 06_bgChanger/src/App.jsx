import { useState } from "react"

function App() {
  const [color, setColor] = useState("green")

  return (

      <div className="w-screen h-screen duration-200" 
      style={{backgroundColor: color}}>

        <h1>Sujit Kumar Singh </h1>

      </div>
  )
}

export default App
