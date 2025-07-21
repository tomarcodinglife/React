import { useState } from "react";
import College from "./components/College.jsx";
import SubjectContext from "./context/SubjectContext.jsx";

let divStyle = {
  backgroundColor: "yellow",
  padding: "10px",
  borderRadius: "15px",
  border: "5px solid black",
};




function App() {
  const [NewSubject, setNewSubject] = useState('Hindi')

  const valuehandle = (e)=>{
  setNewSubject(e.target.value)
  }

  return (
    <>
      <div style={divStyle}>
        <SubjectContext.Provider value={NewSubject}>
          <select value={NewSubject} name="sub" id="sub" onChange={valuehandle}>
            <option value="">Select</option>
            <option value="English">English</option>
            <option value="Math">Math</option>
            <option value="History">History</option>
            <option value="Hindi">Hindi</option>
          </select>
          <h2>Context API</h2>
          <College />
        </SubjectContext.Provider>
      </div>
    </>
  );
}



export default App;
