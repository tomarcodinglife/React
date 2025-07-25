
import { Link } from "react-router-dom"

function NotFoundPage(){
    return (
        <>
            <div style={{textAlign:"center", marginTop: '50px'}}>
                <h1>Not Found Page</h1>
                <Link to={'/'}>Home</Link>
                <p>404 Error</p>
            </div>
        </>
    )
}

export default NotFoundPage