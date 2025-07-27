
import { Link, Outlet } from "react-router-dom"
import './header.css'

function Header(){

    return (
        <>
            <div className="container" >
                <div className="logo-container">
                    <h2 className="logo">LOGO</h2>
                </div>

                <div className="link">
                    <Link className="link" to={'/'}>Home</Link>
                    <Link className="link" to={'/about'}>About</Link>
                    <Link className="link" to={'/courses'}>Courses</Link>
                    <Link className="link" to={'/contact'}>Contact</Link>
                    <Link className="link" to={'/login'}>Login</Link>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )

}

export default Header