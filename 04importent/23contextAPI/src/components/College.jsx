import {ClassComponent} from './ClassComponent'

let divStyle = {
  backgroundColor: "#ff8700",
  padding: "10px",
  borderRadius: "15px",
  border: "1px solid black",
};

export default function College(){
    return (
        <div style={divStyle}>
            <h1>College Component</h1>
            <ClassComponent/>
        </div>
    )
}