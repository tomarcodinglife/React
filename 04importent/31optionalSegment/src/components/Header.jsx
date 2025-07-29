import { Link, Outlet } from 'react-router-dom'


function Header () {
    <>
        return (
            <div style={{display:'flex', color:'white', backgroundColor:'black'}}>
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                < Link to={'/'} > Home </ Link >
                < Link to={'/about'} > About </ Link >
                < Link to={'/courses'} > Course </ Link >
                < Link to={'/contact'} > Contact </ Link >
                < Link to={'/login'} > Login </ Link >
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
        )
    </>
}

export default Header