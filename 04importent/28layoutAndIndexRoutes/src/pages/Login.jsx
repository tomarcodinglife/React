import { NavLink, Outlet, Link} from "react-router-dom";

function Login() {
  return (
    <>
      <div style={{textAlign:'center'}}>
        <div>
          <h1> Login </h1>
        </div>
        <div style={{marginBottom:'12px'}}>
          <Link to={'/'} style={{marginRight:'12px'}}>Home</Link>
          <NavLink to={""}>Student</NavLink>
          <NavLink to={"./college"} style={{marginLeft:'12px', marginRight:'12px'}}>College</NavLink>
          <NavLink to={"./University"}>University</NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Login;
