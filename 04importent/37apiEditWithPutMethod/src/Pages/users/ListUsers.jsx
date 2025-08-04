import { useState, useEffect } from "react"
import { useNavigate } from "react-router";


export default function ListUsers () {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate();
    const apiURL = 'http://localhost:3000/users';


    useEffect (() => {
        getuserData()
    },[])


    const getuserData = async () => {
        let response = await fetch (apiURL)
        let data = await response.json();
        console.log(data)
        setUserData(data)
    }

    const deletUserDetail = async (id) => {
        let response = await fetch (apiURL +"/"+id,{
            method : 'delete'
        })
            response = await response.json();
        console.log(response)
        if(response.ok) {
            alert("User Deleted")
        }

        getuserData()
    }


    const editUser = (id) => {
        navigate("/edit/"+id)
        alert('edit user')
    }


    return(
        <>
            <h3>List Users</h3>
            <table border={'1px'}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Age</td>
                        <td>Email</td>
                        <td colSpan={2}>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={()=> deletUserDetail(user.id)}>Delete</button></td>
                                    <td><button onClick={() => editUser(user.id)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}