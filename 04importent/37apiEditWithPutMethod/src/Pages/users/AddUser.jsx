import { useState } from "react"


export default function AddUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const addUser = async() => {
    let apiUrl = 'http://localhost:3000/users'
    let response = await fetch (apiUrl, {
        method : 'Post',
        body : JSON.stringify({name, email, age, gender})
    })
    response = await response.json();

    if(response){
        alert('User Added')
        window.location.reload();
    }else{
        alert('something Error')
    }
}



    return(
        <>
            <div style={{display:'flex', flexDirection:'column'}}>
                <h3>AddUser</h3>
                <div style={{display:'flex'}}>
                    <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} style={{paddingRight:'2px'}}/>
                    <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)} style={{paddingRight:'2px'}}/>
                    <input type="number" placeholder="age" onChange={(e)=> setAge(e.target.value)} style={{paddingRight:'2px'}}/>
                    <input type="text" placeholder="gender" onChange={(e)=> setGender(e.target.value)} style={{paddingRight:'2px'}}/>
                    <button onClick={addUser}>Add User</button>
                </div>
            </div>
        </>
    )
}