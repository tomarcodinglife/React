import {Subject} from './Subject'

let divStyle = {
  backgroundColor: "#ffe000",
  padding: "10px",
  borderRadius: "15px",
  border: "1px solid black",
};

export default function Student(){
    return (
        <div style={divStyle}>
            <h1>Student Component</h1>
            <Subject/>
        </div>
    )
}