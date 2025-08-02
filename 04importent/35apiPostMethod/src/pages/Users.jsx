import { useEffect } from "react";
import { useState } from "react";



export default function Users () {
    const [userdata, setUserData] = useState([])

    useEffect(()=>{
        getData();
    }, [])

    const getData = async() => {
        const url = "http://localhost:3000/users";
        let response = await fetch (url);
        response = await response.json();
        setUserData(response)
    }



    return(
        <>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Age </th>
                        <th> Gender </th>
                        <th> Type </th>
                        <th> Location </th>
                        <th> Mobile </th>
                        <th> Email </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((user) => (
                            <tr key={user.id}>
                                <td>{user?.id || "N/A"}</td>
                                <td>{user?.name || "N/A"}</td>
                                <td>{user?.age || "N/A"}</td>
                                <td>{user?.gender || "N/A"}</td>
                                <td>{user?.usertype || "N/A"}</td>
                                <td>{user.location?.city || "N/A"}</td>
                                <td>{user?.mobile || "N/A"}</td>
                                <td>{user?.email || "N/A"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}