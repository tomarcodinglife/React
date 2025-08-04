import { useState } from 'react'


function App() {
  // User Login Form 01 Start 
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')


  const handleName =  (e) => {
    setName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const dataCheck = () => {
    if(name.length < 5 || password.length < 8) {
      setMsg("Please Enter More Than 5 Character name and more than than 8 character in password")
    } else {
      setMsg(`Welcome, ${name}`)
    }
  }

  // User Login Form 01 End

  // User Login Form 02 Start
  const [username, setUsername] = useState('')
  const [userNameError, setUserNameError] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userPasswordError, setUserPasswordError] = useState('')


  const userNameHandle = (e) => {
    console.log(e.target.value)
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let name = e.target.value
    setUsername(name)
    if(!regex.test(name) || name.length < 5){
      setUserNameError(`Please Enter Username More Than 5 Character & ${regex} pattern`)
    }else{
      setUserNameError('')
    }


  }

  const userPasswordHandle = (e) => {
    console.log(e.target.value)
    let password = e.target.value
    setUserPassword(password)

    if(password.length < 5 ) {
      setUserPasswordError('Please Enter Password More Than 5 Character')
    }else{
      setUserPasswordError('')
    }
  }





  return (
    <>
      <div>
        <h1>USER LOGIN Form 01</h1>
        <div>
            <input type="text" onChange={handleName} placeholder='Enter Name'/>
            <br /><br />
            <input type="password" onChange={handlePassword} placeholder='Enter Password' />
            <br /><br />
            <button onClick={dataCheck}>Login</button>
            <span>{msg}</span>
        </div>
      </div>


      <div>
        <h1>USER LOGIN Form 02</h1>
        <div>
            <input type="text" onChange={userNameHandle} placeholder='Enter Name' style={{outline: userNameError? '1px solid red' : '1px solid black'}}/>
            <span style={{color:'red'}} >{userNameError && userNameError}</span>
            <br /><br />
            <input type="password" onChange={userPasswordHandle} placeholder='Enter Password' style={{outline: userPasswordError? '1px solid red' : '1px solid black'}} />
             <span style={{color:'red'}}>{userPasswordError && userPasswordError}</span>
            <br /><br />
            <button disabled ={userNameError || userPasswordError || username === '' || userPassword === ''}>Login</button>
        </div>
      </div>
    </>
  )
}

export default App
