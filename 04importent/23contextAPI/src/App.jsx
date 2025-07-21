import { useState } from "react";
import College from "./components/College";

let divStyle = {
  backgroundColor: "yellow",
  padding: "10px",
  borderRadius: "15px",
  border: "5px solid black",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={divStyle}>
        <h2>Context API</h2>
        {/* <College /> */}
      </div>
    </>
  );
}

export default App;
