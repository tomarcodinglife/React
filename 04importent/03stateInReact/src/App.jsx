import { useState } from 'react'
import './App.css'

function App() {
  const [fruit, setFruit] = useState("Apple")
  const [quantity, setQuantity] = useState(1)

  const  fruitFunction = () =>{
    setFruit("Grapes")
  }

  const addQuantity = ()=>{
    setQuantity (quantity+1)
  }

  return (
    <>
      <h1>Fruits :{fruit}</h1>
      <h3>Quantity:{quantity}</h3>
      <button onClick={fruitFunction}>Grapes Fruit</button>
      <button onClick={()=>setFruit("Mango")}>Mango Fruit</button>
      <button onClick={addQuantity}>Add Quantity</button>
      <button onClick={()=> setQuantity(quantity-1)}>Remove Quantity</button>
    </>
  )
}

export default App
