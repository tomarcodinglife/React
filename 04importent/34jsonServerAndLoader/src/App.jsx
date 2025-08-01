import { useEffect, useState } from 'react'



function App() {
  const [userData, setuserData] = useState([])
  const [loding, setLoding] = useState(false)

  useEffect(()=>{
    setLoding(true)
    getUserData()
  }, [])


  const getUserData = async() => {
    const url = 'http://localhost:3000/users'
    let response = await fetch(url);
    response = await response.json();
    // console.log(response)
    setuserData(response)
    setLoding(false)
  }

  console.log("userdata", userData)

  return (
    <>
      <h1>Users Data</h1>
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
            </tr>
          </thead>
          <tbody>
            {
              !loding?
              userData.map((user)=> (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.usertype}</td>
                  <td>{user.location.city}</td>
                  <td>{user.mobile}</td>
                </tr>
              ))
              : <h2>Loding..</h2>
            }
          </tbody>
        </table>
    </>
  )
}

export default App
 