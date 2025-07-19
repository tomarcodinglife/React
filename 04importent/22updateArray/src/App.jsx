import { useState } from 'react'


function App() {
  const [data, setData] = useState([
    'Sujit', 'Amit', 'Sohail', 'Aman', ""
  ])

  const [users, setUsers] = useState([
    {name : "Sujit", Age : 24},
    {name : "Amit", Age : 21},
    {name : "Rohit", Age : 28},
    {name : "Abhijit", Age : 23},
  ])
 
  const handleUser =(name)=>{
    data[data.length-1] = name
    setData([...data])
  }

  const updateAgeHandle = (newAge) =>{
    users[users.length-1].Age = newAge
    setUsers([...users])
  }

  return (
    <>
      <h1>Update Array</h1>
     <div>
       <input type="text" placeholder='Enter Last Username' onChange={(e)=>{handleUser(e.target.value)}}/>
       {
        data.map((item, index)=>{
          return (<h2 key={index}>{item}</h2>)
        })
       }
       {/* <h2>{name}</h2> */}
     </div>
     <hr />
     <br />
     <div>
       <input type="text" placeholder='Enter Age' onChange={(e)=>{updateAgeHandle(e.target.value)}} />
       {
        users.map((item, index)=>{
          return (<h3 key={index}>{item.name}, {item.Age}</h3>)
        })
       }
     </div>
    </>
  )
}

export default App
