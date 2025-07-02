function User({name="Dummy Name", age="00", email="user@email.com", ...props}) {
    return (
        <>
           <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
                <h1>User Component</h1>
                <p>User Details : Name = {name} <br />
                age = {age} & email = {email} </p>
                <>
                    {Object.keys(props).length > 0 && (
                        <div>
                            <h2>Other Props</h2>
                            <ul>
                                {Object.entries(props).map(([key, value]) => (
                                    <li key={key}>{key}: {value}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
           </div>
        </>
    )
}

export default User;