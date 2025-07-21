import { useContext } from "react";
import {SubjectContext} from '../context/SubjectContext.jsx'


let divStyle = {
  backgroundColor: "#f7fe88",
  padding: "10px",
  borderRadius: "15px",
  border: "1px solid black",
};

export default function Subject(){
    const subject = useContext(SubjectContext)
    return (
        <div style={divStyle}>
            <h1>Subject : {subject}</h1>
        </div>
    )
}