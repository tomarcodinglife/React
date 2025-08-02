
import { NavLink, Outlet } from 'react-router'

let mylistStyle = {
    color:'white', 
    marginRight:'1em',
}


export default function Header () {
    
    return (
        <>
            <div style={{display:'flex', backgroundColor:'black', justifyContent:'space-around', alignItems:'center'}}>
                <div style={{color:'white'}}>
                    <h1> LOGO </h1>
                </div>
                <div>
                    <NavLink to={'/'} style={mylistStyle} > Home </NavLink>
                    <NavLink to={'/about'} style={mylistStyle} > About </NavLink>
                    <NavLink to={'/courses'} style={mylistStyle} > Courses </NavLink>
                    <NavLink to={'/contact'} style={mylistStyle} > Contact </NavLink>
                    <NavLink to={'/login'} style={mylistStyle} > Login </NavLink>
                    <NavLink to={'/users'} style={mylistStyle} > Users </NavLink>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}