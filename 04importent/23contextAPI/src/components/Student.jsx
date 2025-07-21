import Subject from './Subject.jsx'

let divStyle = {
  backgroundColor: "#ffe000",
  padding: "10px",
  borderRadius: "15px",
  border: "1px solid black",
};

function Student(){
    return (
        <div style={divStyle}>
            <h1>Student Component</h1>
            <Subject/>
        </div>
    )
}

export default Student