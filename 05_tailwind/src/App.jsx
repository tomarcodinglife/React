import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='bg-green-500 md:p-2 m-8 rounded-2xl'>Sujit Kumar Singh</h1>
      </div>
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo commodi eum aliquam quos incidunt neque. Id ratione iure ipsum laborum consequatur suscipit magnam nobis explicabo ipsa, voluptas laudantium nihil molestias.</p>
      </div>
    </>
  )
}

export default App
