import { NavLink, Outlet, Link } from "react-router-dom";
import './header.css'

function Header() {
    return (
    <>
      <div style={{ 
        display: "flex", 
        color: "white", 
        backgroundColor: "black", 
        borderRadius:'2em', 
        alignItems:"center", 
        justifyContent:'space-between'
        }}>

        <div style={{paddingLeft:'1em'}}>
          <h1>LOGO</h1>
        </div>
            <div style={{paddingRight:'1em'}}>
            <NavLink to={"/"} className={({ isActive }) => isActive? "Link Active" : "Link"}> Home </NavLink>
            <NavLink to={"/about"} className={({ isActive }) => isActive? "Link Active" : "Link"}> About </NavLink>
            <NavLink to={"/courses"} className={({ isActive }) => isActive? "Link Active" : "Link"} > Course </NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => isActive? "Link Active" : "Link"}> Contact </NavLink>
            </div>
        </div>
      <div>
        <Outlet />
      </div>
    </>
    )
}

export default Header;
