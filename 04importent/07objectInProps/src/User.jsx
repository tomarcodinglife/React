function User ({user}) {
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Email: {user.email}</h1>
            <hr />
        </div>
    )
    
}

export default User;