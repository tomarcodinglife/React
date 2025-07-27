
import { Link, Outlet } from "react-router-dom"

function Header () {
    return (
        <>
            <div style={{display:"flex", color:"white", backgroundColor:"black", justifyContent:"space-between", height:"45px", alignItems:'center', borderRadius:"2em"}}>
                <div style={{marginLeft:'2em'}}>
                    <h1>LOGO</h1>
                </div>
                <div style={{marginRight:'2em', }}>
                    <Link to={'/'} style={{marginRight:'2em',  fontWeight:'bold', color:"white", textDecoration:"none"}}>Home</Link>
                    <Link to={'/about'} style={{marginRight:'2em',  fontWeight:'bold', color:"white", textDecoration:"none" }}>About</Link>
                    <Link to={'/courses'} style={{marginRight:'2em',  fontWeight:'bold', color:"white", textDecoration:"none"}}>Courses</Link>
                    <Link to={'/contact'} style={{marginRight:'2em',  fontWeight:'bold', color:"white", textDecoration:"none"}}>Contact</Link>
                    <Link to={'/user'} style={{marginRight:'2em',  fontWeight:'bold', color:"white", textDecoration:"none"}}>Login</Link>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Header