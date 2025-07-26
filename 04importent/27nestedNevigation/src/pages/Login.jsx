import { NavLink, Outlet } from "react-router-dom";
import "../style/login.css"

function Login() {
  return (
    <>
      <div className="container">
        <div className="head-style">
          <h1>Login</h1>
        </div>
        <div className="linkContainerStyle">
            {/* In Student Nav link to section blank because its index page for login page */}
            <NavLink to={""} className="myLink">Student </NavLink> 
            <NavLink to={"College"} className="myLink">College</NavLink>
            <NavLink to={"University"} className="myLink">University</NavLink>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default Login;