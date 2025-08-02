import { useState } from "react";


export default function AddUser () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    let AddUser = async() => {
        const apiurl = 'http://localhost:3000/users'
        let response = await fetch (apiurl, {
            method : 'Post',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({name, email, age})
        })
        let data = await response.json();
        if(data) {
            alert('User Added')
        }
    }



    return(
        <>
             <div style={{textAlign:'center'}}>
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                <br /><br />
                <input type="text" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/>
                <br /><br />
                <input type="number" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
                <br /><br />
                <button onClick={AddUser}>Add User</button>
             </div>
        </>
    )
}