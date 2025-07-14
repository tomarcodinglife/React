import { useState } from 'react'
import { useFormStatus } from 'react-dom'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = async()=>{
   await new Promise (Response => setTimeout(Response, 2000))
   console.log('Form submitted')
  }

  const CustomerFunction = function (){
    const {pending} = useFormStatus()
    console.log(pending)
    return(
      <div>
          <input type="email" name="email" id="email"  autoComplete='username' placeholder='username'/>
          <br />
          <br />
          <input type="password" name="password" id="password" autoComplete='current-password' placeholder='password'/>
          <br />
          <br />
          <button type='submit' disabled={pending}>{pending?"Submiting" : "Submit"}</button>
    </div>
    )
  }

  return (
    <>
      <div>
        <h1>useFormStatus Hook</h1>
      </div>
      <div>
        <form action={handleSubmit}>
        <CustomerFunction/>
        </form>
      </div>
    </>
  )
}

export default App
