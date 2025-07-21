import Student from './Student.jsx'

let divStyle = {
  backgroundColor: "#ffb200",
  padding: "10px",
  borderRadius: "15px",
  border: "1px solid black",
};

function ClassComponent(){
    return (
        <div style={divStyle}>
            <h1>Class Component</h1>
            <Student/>
        </div>
    )
}

export default ClassComponent;
