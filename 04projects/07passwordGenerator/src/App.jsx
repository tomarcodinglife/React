import React, { useCallback } from 'react'
import { useState } from 'react'
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



  return (
    <>
      <div className='h-screen w-full duration-300 m-0 p-0 bg-gray-800 flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-center text-yellow-400'>Password Generator</h1>

        
      </div>
    </>
  )
}

export default App
