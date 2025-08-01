
import { NavLink, Outlet } from "react-router"

export default function Heder () {

    return (
        <>
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                <NavLink className="Link" to={'/'}> Home </NavLink>
                <NavLink className="Link" to={'/about'}> About </NavLink>
                <NavLink className="Link" to={'/courses'}> Courses </NavLink>
                <NavLink className="Link" to={'/login'}> Login </NavLink>
                <NavLink className="Link" to={'/users'}> User </NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}
