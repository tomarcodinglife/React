import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Home from "./components/Home";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to={'/'}>Home</Link>
      <Link to={'/About'}>About</Link>
      <Link to={'/Contact'}>Contact</Link>
      <Link to={'/Login'}><h3>Login</h3></Link>

      {/* <h1>React Router</h1> */}
      <Routes>
        {/* <Route path="/" element= {Home} /> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<h1>About</h1>}/>
        <Route path="/Contact" element={<h1>Contact</h1>}/>
        <Route path="/Login" element={<h1>Login</h1>}/>
        <Route path="/*" element={<h1>Page not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
