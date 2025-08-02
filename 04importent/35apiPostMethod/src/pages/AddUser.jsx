import { useState } from "react"


export default function AddUser () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    let createUser = async () => {
        console.log(name, age, email)
        const apiurl = "http://localhost:3000/users";
        let response = await fetch (apiurl, {
            method : 'Post',
            body:JSON.stringify({name, email, age})
        });
        response = await response.json();

        if(response) {
            alert('data added')
        }
    }


    return(
        <div>
            <h1>Add New User</h1>
            <input type="text"  placeholder="Enter Funn Name" onChange={(e) =>setName(e.target.value)}/>
            <br /><br />
            <input type="text"  placeholder="Enter Email ID" onChange={(e) =>setEmail(e.target.value)}/>
            <br /><br />
            <input type="number" placeholder="Enter Age" onChange={(e) =>setAge(e.target.value)}/>
            <br /><br />
            <button onClick={createUser}>Add User</button>
        </div>
    )
}

