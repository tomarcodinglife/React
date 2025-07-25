import { Link } from "react-router";
import TataElxsiLogo from "../assets/tata-elaxi-logo.png";
import TataGroupLogo from "../assets/tata-group-logo.png";
import "../styles/header.css";

// const headerStyle =  {
//     backgroundColor : 'black',
//     display : 'flex',
//     padding : "10px",
// }

function Header() {
  return (
    <>
      <div className="Header">
        <div className="my-Header">
          <div className="tata-elaxi-logo">
            {/* <Link className='Link'><h2><strong>TATA</strong>ELXSI</h2></Link> */}
            <a href="/" target="_blank">
              <img src={TataElxsiLogo} alt="" height={"25px"} />
            </a>
          </div>
          <div className="container">
            <div className="link-list">
              <ul>
                <li>
                  <Link className="link" to="/">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/lean-forward">
                    Learn Forward
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/investors">
                    Investor
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tata-group-logo">
              {/* <Link className='Link'><h2><strong>TATA</strong>ELXSI</h2></Link> */}
              <a href="/" target="_blank">
                <img src={TataGroupLogo} alt="_blank" height={"35px"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
