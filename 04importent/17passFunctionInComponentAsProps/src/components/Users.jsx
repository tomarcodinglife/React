
const divStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
}

function Users({myFun, name}) {
  return (
    <div style={divStyle}>
        <h1>{name}</h1>
        <button onClick={()=>myFun(name)}>Click Me</button>
    </div>
  );
}

export default Users;