
import { NavLink } from 'react-router'

let Linkstyle = {
    color:'white', 
    marginRight:'1em',
}

export default Header = () => {
    return (
        <>
            <div style={{display:'flex', backgroundColor:'black', justifyContent:'space-around', alignItems:'center', borderRadius:'1em'}}>
                <div style={{color:'white'}}>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <NavLink to={'/'} style={Linkstyle}>Home</NavLink>
                    <NavLink to={'/about'} style={Linkstyle}>About</NavLink>
                    <NavLink to={'/courses'} style={Linkstyle}>Courses</NavLink>
                    <NavLink to={'/contact'} style={Linkstyle}>Contact</NavLink>
                    <NavLink to={'/login'} style={Linkstyle}>Login</NavLink>
                    <NavLink to={'/users'} style={Linkstyle}>Users</NavLink>
                </div>
            </div>
        </>
    )
}