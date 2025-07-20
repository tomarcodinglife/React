import { useState } from "react";
import useCounter from "./useCounter";
import useToggle from "./useToggle"

let titleStyle = {
  color : 'blue'
}


function App() {
  const { count, increment, decrement, reset } = useCounter(10, 5);
  const [value, toggleValue] = useToggle(true)


  return (
    <>
      <h1>Custom Hook</h1>
      <div>
        <h2 style={titleStyle}>Example 01</h2>
        <h3>Count Value = {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      <hr />

      <div>
        <h2 style={titleStyle}>Example 02</h2>
        <button onClick={toggleValue}>Toggle Heading</button>
        <button onClick={()=>toggleValue(false)}>Hide Heading</button> 
        <button onClick={()=>toggleValue(true)}>Show Heading</button>
        {
          value? <h1>Heading </h1> : null
        }
      </div>
    </>
  );
}

export default App;
