import { useReducer } from 'react'


  const emptyData = {
    name:"",
    password:"",
    email:"",
    city:"",
    address : "",
  }

  const reducer = (data, action) => {
    return {...data, [action.type] : action.val}
    // console.log(data, action)
  }


function App() {
  const [data, dispatch] = useReducer(reducer, emptyData)
  console.log(data)


  return (
    <>
      <h1>useReducer</h1>
      <input type="text" onChange={(e)=>dispatch({val : e.target.value, type:'name'})}  placeholder='Enter Name'/>
      <br /><br />
      <input type="text" onChange={(e) => dispatch({val : e.target.value, type:'password'})}  placeholder='Enter Password'/>
      <br /><br />
      <input type="text"  onChange={(e) =>dispatch({val : e.target.value, type:'email'})} placeholder='Enter Email'/>
      <br /><br />
      <input type="text"  onChange={(e)=> dispatch({val : e.target.value, type:'city'}) } placeholder='Enter City'/>
      <br /><br />
      <input type="text" onChange={(e) => dispatch({val:e.target.value, type:'address'})}  placeholder='Enter Address'/>
      <br /><br />
      <button>Add Details</button>
    </>
  )
}

export default App
