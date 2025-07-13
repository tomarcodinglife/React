import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function Increase() {
    setCount (count + 1);
  }

  function Decrease() {
    setCount (count - 1);
  }

  function Reset() {
    setCount(0);
  }




  return (
    <>
      <div>
        <h1>Sujit Tomar Counter</h1>
        <div className='flex justify-center items-center m-5 '>
          <button onClick={Increase} className='m-10 '>Increase {count}</button>
          <button onClick={Decrease}>Decrease {count}</button>
          <button onClick={Reset}>Reset {count}</button>
        </div>
      </div>
    </>
  )
}

export default App
