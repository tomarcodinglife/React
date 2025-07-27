import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "2em",
        }}
      >
        <div style={{ color: "white", marginLeft: "2em" }}>
          <h1>Logo</h1>
        </div>
        <div
          style={{
            color: "white",
            marginRight: "2em",
            display: "flex",
            gap: "2em",
          }}
        >
          <Link to={"/"} style={{ color: "white" }}>
            Home
          </Link>
          <Link to={"/about"} style={{ color: "white" }}>
            About
          </Link>
          <Link to={"/courses"} style={{ color: "white" }}>
            Courses
          </Link>
          <Link to={"/contact"} style={{ color: "white" }}>
            Contact
          </Link>
          <Link to={"/users"} style={{ color: "white" }}>
            Users
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
