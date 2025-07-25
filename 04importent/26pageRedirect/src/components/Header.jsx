import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                <ul>
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
        </>
    )
}