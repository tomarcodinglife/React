import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (

      <div className="w-screen h-screen duration-200" 
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

              <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-black rounded-xl p-1">
                
                <button className="w-24 h-8 outline-none p-4 border-2 border-white" style={{backgroundColor: ("blue")}}>Blue</button>
                <button className="w-24 h-8 outline-none p-4 border-2 border-white" style={{backgroundColor: ("green")}}>Green</button>
                <button className="w-24 h-8 outline-none p-4 border-2 border-white" style={{backgroundColor: ("olive")}}>Olive</button>
                <button className="w-24 h-8 outline-none p-4 border-2 border-white" style={{backgroundColor: ("pink")}}>Pink</button>
                <button className="w-24 h-8 outline-none p-4 border-2 border-white" style={{backgroundColor: ("indigo")}}>Indigo</button>
              
              </div>

        </div>
      </div>
  )
}

export default App
