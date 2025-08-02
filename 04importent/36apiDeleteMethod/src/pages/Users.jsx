import { useState } from "react"
import { useEffect } from "react"


export default function Users () {
    const [users, setUsers] = useState([])
    const [userDelete, setUserDeletd] = useState()
    const apiUrl = 'http://localhost:3000/users'


    useEffect(()=>{
        getUsersData()
    },[])


    const getUsersData = async () => {
        let response = await fetch (apiUrl)
        let data = await response.json();
        console.log(response)
        setUsers(data)
        console.log(users)
    }


    const deleteUser = async (id) => {
        let response = await fetch (apiUrl +"/"+id, {
            method:'delete'
        } )
        let data = await response.json();

        if(response.ok){
            alert('deleted user')
        }
        console.log(id)
        getUsersData()
    }




    return(
        <>
            <div style={{alignItems:'center', justifyContent:'center', textAlign:'center'}}> 
                <h1>Users List</h1>
                <table border={'1px'}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td colSpan={2}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td> <button onClick={()=>deleteUser(user.id)}>Delete</button> </td>
                                        <td> <button>Edit</button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}