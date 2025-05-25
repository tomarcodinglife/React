import { useState } from 'react'
import './App.css'

function App() {

    const [counter, setCounter] = useState(1);

    function incrementCounter(){
      if(counter < 50){
        setCounter(counter + 1) //not above of 50
        console.log("Increase to", counter + 1)
      }else(
        setCounter(0),
        console.log('Maximum limit reached')
      )
    }


    function decrementCounter(){
      if(counter > 0){
        setCounter(counter - 1) //not less than 0
      }else(
        setCounter(0),
        console.log('Minimim limit reached')
      )
    }

  return (
    <>
      <h1>Tomar Counter Project</h1>
      <h2>Counter Value {counter}</h2>
      <button id="addbtn" className='btn' onClick={incrementCounter}>Add Value {counter}</button>
      <button id='removebtn'className='btn' onClick={decrementCounter}>Remove Value {counter}</button>
      <footer>Footer {counter}</footer>
    </>
  )
}

export default App
