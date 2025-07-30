import UsersData from '../Data/UsersData';
import { useParams } from 'react-router-dom'

function UserDetails () {

    const { id } = useParams();
    console.log(id)
    const userdata = UsersData.find((item) => item.Id === id)
    console.log(userdata)
    const {Name, Roll, Branch, Session } = userdata

    return(
        <>
            <h1>User Details</h1>
            <p>User Detail : Name {Name}, Roll: {Roll}, Branch : {Branch}, Session : {Session}</p>
        </>
    )
}

export default UserDetails