import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import User from './User'
import { lazy } from 'react'
import { Suspense } from 'react'

function App() {
  const [userComponent, setUserComponent] = useState(false)

  const User = lazy(() => import ('./User'))


  return (
    <>
      <h1>Lazy Loading</h1>
      <button onClick={()=>setUserComponent(!userComponent)}>Load user component</button>

      {/* <User/> */}
      <div>
        {userComponent? <Suspense fallback={<h3>Loding..</h3>}> <User/> </Suspense>  : null}
      </div>

    </>
  )
}

export default App
