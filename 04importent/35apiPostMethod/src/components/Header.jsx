
import { NavLink, Outlet } from "react-router"


let mylistStyle = {
    color:'white', 
    marginRight:'1em',
}

export default function Heder () {

    return (
        <>
            <div style={{display:'flex', backgroundColor:'black', justifyContent:'space-around', alignItems:'center'}}>
                <div style={{color:'white'}}>
                    <h1>LOGO</h1>
                </div>
                <div style={{color:'white'}}>
                    <NavLink className="Link" to={'/'} style={mylistStyle} > Home </NavLink>
                    <NavLink className="Link" to={'/about'} style={mylistStyle}> About </NavLink>
                    <NavLink className="Link" to={'/courses'} style={mylistStyle}> Courses </NavLink>
                    <NavLink className="Link" to={'/login'} style={mylistStyle}> Login </NavLink>
                    <NavLink className="Link" to={'/users'} style={mylistStyle}> User </NavLink>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}
