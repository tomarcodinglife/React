import UsersData from './UsersData.js'
import {Link} from 'react-router-dom'



function Data () {
    return (
        <>
            <ul>
                {
                     UsersData.map((user)=>{
                        return (
                            <li key={user.id}>
                            <strong><Link to={"/users/"+user.id}>{user.name}</Link></strong>
                            </li>
                        )
                     }) 
                }
            </ul>
        </>
    )
}

export default Data