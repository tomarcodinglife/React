import React, { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import { useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(()=>{
    let password = ''
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbersAllowed) {
      characters += '0123456789'
    }
    if (charactersAllowed) {
      characters += '!@#$%^&*()_+[]{}|;:,.<>?'
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      password += characters[randomIndex]
    }
    setPassword(password)
  }, [length, numbersAllowed, charactersAllowed])

  useEffect(()=>{passwordGenerator()}, [length, numbersAllowed, charactersAllowed, passwordGenerator])

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
      .then(()=>{
        alert("Password Copied")
      })
      .catch(()=>{
        alert("Faild to copied password")
      })
  }

  return (
    <>
      <div className='h-screen w-full duration-300 m-0 p-0 bg-gray-800 flex flex-col justify-center items-center '>
        <div className='bg-gray-700 p-6 rounded-lg shadow-lg'>
          
          <div className='flex flex-row m-4 gap-4 items-center justify-center'>
              <h1 className='text-white text-2xl uppercase font-bold justify-center items-center'>Password Generator</h1>
          </div>
        
          <div className='flex flex-row items-center justify-center'>
              <input type="text" value={password} readOnly className='outline-none bg-gray-100 text-gray-700 rounded-md p-2 font-bold  w-full py-1 px-3 '/>
              <button className='bg-blue-500 text-white rounded-md p-1 font-bold shrink-0 h-8 '>Copy</button>
          </div>

          <div className='flex flex-row items-center justify-center gap-2'>

              <div className='flex flex-row m-4 gap-1 items-center justify-center' >
                <input type="range" min={8} max={20} value={length} className='cursor-pointer bg-yellow-500 h- rounded-lg' onChange={(e)=>{Number(setLength(e.target.value))}}/>
                <label htmlFor="" className='text-white'>Length:{length}</label>
              </div>

              <div className='flex flex-row m-4 gap-1 items-center justify-center'>
                <input type="checkbox" defaultChecked={numbersAllowed} id='numberInput' onChange={()=>{setNumbersAllowed((prev) => !prev)}} />
                <label htmlFor="" className='text-white'>Number</label>
              </div>

              <div className='flex flex-row m-4 gap-1 items-center justify-center'>
                <input type="checkbox" defaultChecked={charactersAllowed} id='numberInput' onChange={()=>{setCharactersAllowed((prev) => !prev)}} />
                <label htmlFor="" className='text-white'>Char</label>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}


export default App


{/* <div className='bg-gray-700 p-6 rounded-lg shadow-lg'>
          <h1 className='text-2xl text-white mb-4'>Password Generator</h1>
          <div className='mb-4'>
            <label className='text-white'>Length: </label>
            <input 
              type='number' 
              value={length} 
              onChange={(e) => setLength(e.target.value)} 
              className='ml-2 p-1 rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='text-white'>
              <input 
                type='checkbox' 
                checked={numbersAllowed} 
                onChange={(e) => setNumbersAllowed(e.target.checked)} 
              />
              Include Numbers
            </label>
          </div>
          <div className='mb-4'>
            <label className='text-white'>
              <input 
                type='checkbox' 
                checked={charactersAllowed} 
                onChange={(e) => setCharactersAllowed(e.target.checked)} 
              />
              Include Special Characters
            </label>
          </div>
          <button 
            onClick={passwordGenerator} 
            className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
          >
            Generate Password
          </button>
          {password && (
            <div className='mt-4 text-white'>
              <strong>Password: </strong>{password}
            </div>
          )}
        </div> */}
