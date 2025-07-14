import { useState, useRef } from 'react'

function App() {
  const userRef = useRef();
  const passwordRef = useRef();
  


  const handleform = (e) => {
    e.preventDefault();
    const user = document.getElementById('user1').value;
    const password = document.getElementById('password1').value;
    console.log(user, password);
  }

  const handleformRef = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user, password);
  }

  return (
    <>
      
      <div>
        <h1>Uncontrolled Component</h1>
        <form action="" method='post' onSubmit={handleform} id='form1'>
          <input type="text" id='user1' placeholder='Enter Username' autoComplete="username"/>
          <br />
          <input type="password" id='password1' placeholder='Enter Your Password' autoComplete="current-password"/>
          <br />
          <button>Submit</button>
        </form> 

        <hr />
        <h1>Uncontrolled Component with useRef</h1>
        <form action="" method='post' onSubmit={handleformRef} id='form2'>
          <input type="text" ref={userRef} id='user2' placeholder='Enter Username' autoComplete="username"/>
          <br />
          <input type="password" ref={passwordRef} id='password2' placeholder='Enter Your Password' autoComplete="current-password"/>
          <br />
          <button>Submit with Ref</button>
        </form> 
      </div>
    </>
  )
}

export default App
