import { useState } from 'react'

function App() {
  const [data, setData] = useState({
    name : "Sujit Tomar",
    address : {
      city : "Patna",
      country : "India",
    },
  })

  const handleChange = (event)=>{
    const {name, value} = event.target
    // const name = event.target.name
    // const value = event.target.value
    console.log(event.target.name)
    console.log(event.target.value)


    if(name === 'name'){
      setData((prev)=>({
        ...prev,
        name : value,

      }));
    }else if (name === 'city' || name === 'country'){
      setData((prev) => ({
        ...prev,
        address : {
          ...prev.address,
          [name] : value,
        }
      }
      ))
    }
  }

  return (
    <>
      <div>
        <h1>Update Object in State</h1>
        <input type="text" placeholder='Enter Name' name='name' onChange={handleChange} />
        <input type="text" placeholder='Enter City' name='city' onChange={handleChange}/>
        <input type="text" placeholder='Enter Country' name='country' onChange={handleChange}/>
      </div>
      <div>
        <p>Name : {data.name}</p>
        <p>City : {data.address.city}</p>
        <p>Country : {data.address.country}</p>
      </div>
    </>
  )
}

export default App
