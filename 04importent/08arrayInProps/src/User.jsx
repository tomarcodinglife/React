function User({user}){
 return(
    <div>
        <h1>Users Details</h1>
        {user.map((obj) =>(
            <div key={obj.id} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
                <h2>{obj.name}</h2>
                <p>Age: {obj.age}, Email: {obj.email}, Country: {obj.country}, Mobile: {obj.mobile}, College: {obj.college}</p>
            </div>
        ))}
    </div>
 )
}

export default User;