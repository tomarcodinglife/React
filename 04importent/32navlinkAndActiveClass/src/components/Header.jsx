import { NavLink, Outlet, Link } from "react-router-dom";
import './header.css'

function Header() {
    return (
    <>
      <div style={{ display: "flex", color: "white", backgroundColor: "black", borderRadius:'2em', alignItems:"center", justifyContent:'space-between'}}>
        <div style={{paddingLeft:'1em'}}>
          <h1>LOGO</h1>
        </div>
            <div style={{color:'white', paddingRight:'1em'}}>
            <NavLink to={"/"} className={Link}> Home </NavLink>
            <NavLink to={"/about"}> About </NavLink>
            <NavLink to={"/courses"}> Course </NavLink>
            <Link to={"/contact"} className={({isActive}) => 'isActive' ? "Active" : "Inactive"}> Contact </Link>
            </div>
        </div>
      <div>
        <Outlet />
      </div>
    </>
    )
}

export default Header;
