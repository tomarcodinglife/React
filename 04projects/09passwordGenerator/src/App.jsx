import React, { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
// import { useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let finalChars = characters;
  let guaranteedChars = [];

  if (numbersAllowed) {
    finalChars += numberChars;
    guaranteedChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
  }

  if (charactersAllowed) {
    finalChars += specialChars;
    guaranteedChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
  }

  // Fill the rest of password
  let password = guaranteedChars.join('');
  for (let i = guaranteedChars.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * finalChars.length);
    password += finalChars[randomIndex];
  }
npm install tailwindcss @tailwindcss/vite

  // Optionally: shuffle password to randomize guaranteed positions
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  setPassword(password);
}, [length, numbersAllowed, charactersAllowed]);













  useEffect(()=>{passwordGenerator()}, [length, numbersAllowed, charactersAllowed, passwordGenerator])

  const copyPassword = useRef(null)

  const copyPasswordClipBoard = useCallback(()=>{
    copyPassword.current?.select()
    copyPassword.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  },[password])

  // const copyPassword = () => {
  //   navigator.clipboard.writeText(password)
  //     .then(()=>{
  //       alert("Password Copied")
  //     })
  //     .catch(()=>{
  //       alert("Faild to copied password")
  //     })
  // }



  return (
    <>
      <div className="h-screen w-full bg-gray-800 flex flex-col justify-center items-center p-4">
        <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
    
        <h1 className="text-white text-xl sm:text-2xl uppercase font-bold text-center mb-4">
          Password Generator
        </h1>

        {/* Input & Button Inline */}
        <div className="flex w-full mt-2">
          <input
            type="text"
            value={password}
            ref = {copyPassword}
            readOnly
            className="flex-grow px-3 py-2 rounded-l-md bg-gray-100 text-gray-700 font-semibold focus:outline-none text-sm"
          />
          <button
            onClick={copyPasswordClipBoard}
            className="px-3 py-2 bg-blue-500 text-white font-bold rounded-r-md hover:bg-blue-600 text-sm"
          >
            Copy
          </button>
        </div>

        {/* Controls - Responsive Stack */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer bg-yellow-500 rounded-lg"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="text-white text-sm">Length: {length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numbersAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />
            <label className="text-white text-sm">Number</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charactersAllowed}
              onChange={() => setCharactersAllowed((prev) => !prev)}
            />
            <label className="text-white text-sm">Char</label>
          </div>
        </div>
      </div>
</div>

    </>
  )
}


export default App