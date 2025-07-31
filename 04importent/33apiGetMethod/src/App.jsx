import { useEffect } from 'react'
import { useState } from 'react'


function App() {
    const [userData, setUserData] = useState([]);

  useEffect(()=>{
    getUserData()
  },[])

  async function getUserData() {
    const apiURL = 'https://dummyjson.com/users'  
    let response = await fetch (apiURL)
        response = await response.json()
        setUserData(response.users)
  }

  console.log(userData)


  return (
    <>
      <h1>Fatch user Data from API (GET Method) </h1>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Maiden Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user) =>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.maidenName}</td>
                    <td>{user.age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

    </>
  )
}

export default App
