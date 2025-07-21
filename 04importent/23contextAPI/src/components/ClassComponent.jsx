import {Student} from './Student'

let divStyle = {
  backgroundColor: "#ffb200",
  padding: "10px",
  borderRadius: "15px",
  border: "1px solid black",
};

export default function Class(){
    return (
        <div style={divStyle}>
            <h1>Class Component</h1>
            <Student/>
        </div>
    )
}
