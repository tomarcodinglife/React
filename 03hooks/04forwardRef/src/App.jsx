import { useState, useRef } from 'react'
import UserInput from './UserInput'
import MyUserInput from './MyUserInput'


function App() {
  const [count, setCount] = useState(0)

  // for old method
  const inputRef = useRef(null)
  const updateInput = () => {
    console.log(inputRef.current.value)
    inputRef.current.value = 1000
    inputRef.current.focus()
  }

  // for new method
  const myInputRef = useRef(null)
  const updateMyInput = () => {
    console.log(myInputRef.current.value)
    myInputRef.current.value = 2000
    myInputRef.current.focus()
  }

  // call both functions
  const updateBothInputs = () => {
    updateInput();
    updateMyInput();
  }



  return (
    <>
      <h1>Forward Ref Hook</h1>
      {/* <input type="text" ref={inputRef} /> */}
      <UserInput ref={inputRef}/>
      <MyUserInput ref={myInputRef} />
      <button onClick={updateBothInputs}>Update Input Field</button>
    </>
  )
}

export default App
