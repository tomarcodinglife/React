import { useRef } from "react";
import { useState } from "react";

function App() {
  const [isLocked, setisLocked] = useState(true); // access input action
  const [inputValue, setInputValue] = useState(""); // input value state
  const inputRef = useRef(null); // true or false

  const handleToggle = () => {
    if (inputRef.current) {
      inputRef.current.disabled = !isLocked; // toggle input disabled state
      inputRef.current.focus(); // focus the input when toggled
      inputRef.current.value = inputValue; // refrence input value
      inputRef.current.placeholder = inputValue;
      // inputRef.current.style.backgroundColor = isLocked ? "gray" : "black";
    }
    setisLocked(!isLocked); // update state
  };

  const handleInput = () => {
    setInputValue(inputRef.current.value); // update state with input value
  };

  return (
    <>
      <h1>useRef Hooks</h1>
      <div>
        <input
          type="text"
          placeholder="type here..."
          disabled={isLocked}
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleToggle}>{isLocked ? "Unlock" : "Lock"}</button>
      </div>
      <br />
      <div>
        <h1></h1>
        <input type="text" placeholder="Get Input Value" value={inputValue} />
        <button onClick={handleInput}>Get Input Value</button>
        <h1>{inputValue}</h1>
      </div>
    </>
  );
}

export default App;
