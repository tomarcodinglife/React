import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
    <>
      <div style={{ display: "flex", color: "white", backgroundColor: "black", borderRadius:'2em', alignItems:"center", justifyContent:'space-between'}}>
        <div style={{paddingLeft:'1em'}}>
          <h1>LOGO</h1>
        </div>
            <div style={{color:'white', paddingRight:'1em'}}>
            <Link to={"/"} style={{color:'white'}}> Home </Link>
            <Link to={"/about"} style={{color:'white', marginLeft:'1em'}}> About </Link>
            <Link to={"/courses"} style={{color:'white', marginLeft:'1em'}}> Course </Link>
            <Link to={"/contact"} style={{color:'white', marginLeft:'1em'}}> Contact </Link>
            <Link to={"/login"} style={{color:'white', marginLeft:'1em'}}> Login </Link>
            </div>
        </div>
      <div>
        <Outlet />
      </div>
    </>
    )
}

export default Header;
