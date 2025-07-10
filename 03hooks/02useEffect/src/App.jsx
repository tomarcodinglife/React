import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

// ..........................................................................................................................................

  const namePrint = function namePrint(name) {
    console.log(`Hello ${name}`);
  }

  useEffect(() => {
      namePrint("John");
  },[]);

// ..........................................................................................................................................

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

// ..........................................................................................................................................

  const counterFunction = function counterFunction() {
    console.log(`Count is ${count}`);
  }

  // counterFunction();

  useEffect(() => {
    counterFunction();
  }, [count]);

  const currentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString();
  };

  const currentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-GB');
  }

  const handleTime = () => {
    const timeInterval = setInterval(() => {
      setData(currentTime());
    }, 1000);
    return timeInterval;
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setData(currentTime());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);


  const handleDate = () => {
    setData(currentDate());
  }
    

  return (
    <>
      <div>
        <h1>Sujit Kumar</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h2>{data}</h2>
        <button onClick={handleTime}>Current Time</button>
        <button onClick={handleDate}>Current Date</button>
      </div>
    </>
  );
}

export default App;
