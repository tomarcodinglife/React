import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"


export default function EditUsers () {
    const {id} = useParams();
    const apiurl = ('http://localhost:3000/users/'+id)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    

    useEffect(()=>{
        getUserData()
    }, [])


    const getUserData =  async() => {
       
       let response = await fetch (apiurl)
       response = await response.json();
       setAge(response.age)
       setName(response.name)
       setEmail(response.email)
       setGender(response.gender)
       console.log(apiurl)
    }

    const updateUserDetails = async () => {
        let response = await fetch (apiurl, {
            method : 'Put',
            body : JSON.stringify({name, age, email, gender})
        })
        response = await response.json();
        if(response){
            alert('User Data Updated')
            navigate('/listusers')
        }
    }

    return(
        <>
            <h1>Edit Users</h1>

            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" />
            <br /><br />
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email" />
            <br /> <br />
            <input type="text" value={age} onChange={(e)=> setAge(e.target.value)}  placeholder="Age" />
            <br /><br />
            <input type="text" value={gender} onChange={(e)=> setGender(e.target.value)}  placeholder="Gender" />
            <br /><br />
            <button onClick={updateUserDetails}>Update User</button>

        </>
    ) 
}