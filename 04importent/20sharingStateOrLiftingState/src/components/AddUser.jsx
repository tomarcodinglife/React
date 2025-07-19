
import { useState } from "react";

function AddUser ({setUser}){

    return(
        <div>
            <h1>Add User</h1>
            <input type="text" onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter Username" />
        </div>
    )
}

export default AddUser;