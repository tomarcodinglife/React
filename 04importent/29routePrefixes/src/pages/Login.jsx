import {NavLink, Outlet} from "react-router-dom"

function Login (){
    return (
        <>
            <div>
                <h1>Login</h1>
            </div>
            <div style={{textAlign:"center", textDecoration:'none'}}>
                {/* below user is prefix for signin, signup and forgate page */}
                <NavLink to={"/user"}> Sign In</NavLink>
                <NavLink to={'/user/signup'} style={{marginLeft:"2em", marginRight:"2em"}}> Sign Up</NavLink>
                <NavLink to={'/user/forgatepassword'}> Forgate Password</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Login;