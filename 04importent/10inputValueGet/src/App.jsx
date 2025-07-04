import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("Sujit Tomar")

  return (
    <>
      <h1>Get Input Value</h1>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Please Write Something'/>
      <h1>{inputValue}</h1>
      <button onClick={()=>{setInputValue("")}}>Clear Value</button>
    </>
  )
}

export default App
