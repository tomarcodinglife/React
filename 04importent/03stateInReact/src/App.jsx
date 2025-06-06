import { useState } from 'react'
import './App.css'

function App() {
  let fruit = "Apple"
  let quantity = 10

  const  fruitFunction = () =>{
    fruit = "Grapes"
  }

  const addQuantity = ()=>{
    quantity+1
  }

  return (
    <>
      <h1>Fruits :{fruit}</h1>
      <h3>Quantity:{quantity}</h3>
      <button onClick={addQuantity}>Add Quantity</button>
      <button onClick={fruitFunction}>Change Fruit</button>
    </>
  )
}

export default App
