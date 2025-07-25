import { Link } from "react-router-dom";
import "../style/header.css";



export default function Header(){
    return (
        <>
            <div className="header">
                <div className="Logo">
                    <h1>LOGO</h1>
                </div>
                <div className="Link-Container">
                    <ul className="Link-List">
                        <li>
                            <Link className="link" to={"/"}> Home </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/about"}> About </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/career"}> Career </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/contact"}> Contact </Link>
                        </li>
                        <li>
                            <Link className="link" to={"/login"}> Login </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}