import { use, useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [value, setValue] = useState(0);
  const [greeting, setGreeting] = useState([]);
  const [toggle, setToggle] = useState("abc");
  const [toggle02, setToggle02] = useState("def");
  const [display, setDisplay] = useState(true);
  const [message, setMessage] = useState("");

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

  const callnamePrintFunction = () => {
    const msgs = [];
    for (let i = 0; i < value; i++) {
      msgs.push(`Hello ${i + 1}`);
    }
    setGreeting(msgs);
  }

  useEffect(() => {
    callnamePrintFunction();
  },[value])


  // ..........................................................................................................................................

  // toggle style
  const toggleStyle = {
    display: display ? "block" : "none",
    backgroundColor: "lightblue",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0"
  }

  // toggle Display
  const toggleDisplay = () => {
    setDisplay(!display);
  }

  const case01 = () => {
    if (toggle === "abc") {
      setToggle("xyz");
    } else {
      setToggle("abc");
    }
  }



  const case02 = () => {
    if (toggle02 === "def") {
      setToggle02("uvw");
    } else {
      setToggle02("def");
    }
  }
  
  // const mytoggle01 = () => {
  //   setToggle(!toggle);
  // }

  // const mytoggle02 = () => {
  //   setToggle02(!toggle02);
  // }

  // useEffect for Unmounting
  useEffect(() => {
    return () => {
      console.log("Cleanup function for toggle");
      setMessage("Toggle component is unmounted");
    }
  }, [display])


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
      <br />
      <div>
        <input type="number" onChange={(e)=>(setValue(Number(e.target.value)))}/>
        <button onClick={callnamePrintFunction}>Submit</button>
        <h2>Greetings:</h2>
        <ul>
          {greeting.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul> 
      </div>
      <br />
      <div>
        <button onClick={toggleDisplay}>Toggle Display</button>
        <p>{display ? "Display is ON" : "Display is OFF"}</p>
      </div>
    
      <div style={toggleStyle}>
        <div>
          <button onClick={case01}>Toggle01</button>
          <p>{toggle}</p>
          <button onClick={case02}>Toggle02</button>
          <p>{toggle02}</p>
        </div>
      </div>
      <div style={{display: display ? "none" : "block"}}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
