import UserData from "./UsersData.js"
import { useParams } from "react-router-dom"

function UserDetails () {
    const { id } = useParams();
    const user = UserData.find((u)=>u.id === id)
    const {name, roll, college} = user

    if(!user) {
        return <h2>User not found</h2>
    }



    return (
        <>
            <h1>{name} Details</h1>
            <p>Roll No. {roll}</p>
            <p>College {college}</p>
        </>
    )
}

export default UserDetails