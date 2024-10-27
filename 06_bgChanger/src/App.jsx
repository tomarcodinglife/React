import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (

      <div className="w-screen h-screen duration-200" 
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-orange-600 p-2 rounded-lg">
                
            <button onClick={() => setColor("blue")} className="w-24 h-8 p-1 outline-none border-2 border-white hover:border-none" style={{backgroundColor: ("blue")}}>Blue</button>

            <button onClick={()=> setColor("green")} className="w-24 h-8 p-1 outline-none border-2 border-white hover:border-none" style={{backgroundColor: ("green")}}>Green</button>

            <button onClick={()=> setColor("Olive") } className="w-24 h-8 p-1 outline-none border-2 border-white hover:border-none" style={{backgroundColor: ("olive")}}>Olive</button>

            <button onClick={()=> setColor("purple")} className="w-24 h-8 p-1 outline-none border-2 border-white hover:border-none" style={{backgroundColor: ("purple")}}>Purple</button>

            <button onClick={()=> setColor("indigo")} className="w-24 h-8 p-1 outline-none border-2 border-white hover:border-none" style={{backgroundColor: ("indigo")}}>Indigo</button>
                
          </div>

        </div>
      </div>
  )
}

export default App
