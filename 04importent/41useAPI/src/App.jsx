import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Suspense } from 'react'
import { use } from 'react'


const userResourse = fetch ('https://dummyjson.com/users').then((response) => response.json());


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* remember that it is not a hook  */}
      <h1>useAPI in React 19 </h1> 
      <Suspense fallback={<p>Loding..</p>}> <User userResourse = {userResourse} /> </Suspense>  
    </>
  )
}

export default App


const User = ({userResourse}) => {
  console.log("userresourse", userResourse)
  const userData = use(userResourse)
  console.log("userdata", userData)
  return (
    <>
        <h1>User List</h1>
        <ul>
          {
            userData.users.map((item) => (
              <li key={item.id}>{item.firstName}</li>
            ))
          }
        </ul>
    </>
  )
}
