
import React, {useState} from "react";

function DriveState(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    function handleAddUser(){
        setUsers([...users, user])
    }

    const totalUser = users.length;
    const lastUser = users[users.length-1]
    const uniqueUser = [...new Set(users)].length

    return(
        <>
            <h3>Total User : {totalUser}</h3>
            <h3>Last User : {lastUser}</h3>
            <h3>uniqueUser : {uniqueUser}</h3>
            <input type="text" onChange={(e)=>setUser(e.target.value)} />
            <button onClick={handleAddUser}>Add Users</button>
            {
                users.map((item, index)=>{
                    return <h3 key={index}>{item}</h3>
                })
            }
        </>
    )
}

export default DriveState