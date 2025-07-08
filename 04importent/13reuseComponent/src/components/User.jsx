
const userStyle = {
    border : "1px solid green",
    margin : "10px",
    padding : "10px",
    borderRadius : "10px",
    backgroundColor : "#f0f0f0",
    boxShadow : "0 2px 5px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "left",
};


const User = ({ data }) => {
    return (
        <div style={userStyle}>
            <h3><span>Name : {data.name}</span></h3>
            <h3><span>Email : {data.email}</span></h3>
            <h3><span>Password : {data.password}</span></h3>
            <h3><span>Type : {data.type}</span></h3>
            <h3><span>Status : {data.status}</span></h3>

        </div>
    )
}

export default User