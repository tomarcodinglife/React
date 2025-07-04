function User ({children, color="green"}){
    console.log(color)
    console.log(children)
    return (
        <div style={{color:color}}>
            {children}
            
        </div>
        
    )

}

export default User;