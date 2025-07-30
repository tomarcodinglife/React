
import UsersData from "../Data/UsersData"
import { Link } from 'react-router-dom'

function UserList () {

    return (
        <>
            <h1>User List</h1>
            {
                UsersData.map((item)=>{
                    return (
                        <h1 key={item.Id}> <Link to={'/users/'+item.Id}> {item.Name} </Link></h1>
                    )
                }) 
            }

            <h1>User List with name in url </h1>
            {
                UsersData.map((item)=>{
                    return (
                        <h1 key={item.Id}> <Link to={'/users/'+item.Id+"/"+item.Name}> {item.Name} </Link></h1>
                    )
                }) 
            }
        </>
    )
}


export default UserList