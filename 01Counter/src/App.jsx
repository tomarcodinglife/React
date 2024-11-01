import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] =  useState (0)
  // let counter = 5 

  let increase = () => {
    counter = counter + 5
    setCounter(counter)
    console.log(counter)
  }

  let decrease = () => {
    if(counter >=5){
      counter = counter - 5
      setCounter(counter)
    }else{
      counter = 0
      setCounter(counter)
    }
    // counter = counter - 5
    // setCounter(counter)
    // console.log(counter)
  }


  // let decrease = () => {
  //   if(counter < 5) {
  //     counter = counter - 5
  //     setCounter(counter)
  //   }else if(counter === 0 || counter > 0){
  //     counter = 0
  //     setCounter(counter)
  //   }

  return (
    <>
      <h1>Sujit Kumar Singh</h1>
      <h2>Counter Value {counter}</h2>
      <span>
        <button onClick={increase}>Increase (+5) </button>
        <button onClick={decrease}>Decrease (-5)</button>
      </span>
    </>
  )
}
export default App
