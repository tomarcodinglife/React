import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [value, setValue] = useState()

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{

    let pass = ""
    let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "@#%&*(){}[]-+.^!`~ "

    for (let index = 0; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char)
        
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
        <div className='w-auto bg-yellow-500 rounded-lg p-3'>

          <h1 className='text-2xl uppercase font-semibold text-black m-4'>Password Generator</h1>

            <div className='w-full inline-flex object-center'>

                <input type="text" placeholder='Password' readOnly value={password} className='w-full h-10 rounded-md m-2 border-none p-2 
                active:border-none hover:border-none' ref={passwordRef}/>

                <button className='w-20 h-10 rounded-lg m-2 active:border-none hover:border-none'>Copy</button>

            </div>
            <div className='w-full inline-flex object-center m-2'>

                <span className='inline-flex'>

                    <input type="range" min={"6"} max={"50"} value={length} placeholder='Password' readOnly className='w-50 m-1 text-white cursor-pointer'
                    onChange={(e)=> {setLength(e.target.value)}}/>

                    <label htmlFor="" className='m-1 text-red-600 font-semibold'>Length ({length})</label>

                </span>

                <span  className='inline-flex px-8'>

                    <input type="checkbox" defaultChecked= {numberAllowed} id="numberInput" 
                    onChange={() => {setNumberAllowed((pre) => !pre); }}/>

                    <label htmlFor="" className='m-1 text-red-600 font-semibold'>Number</label>

                </span>

                <span  className='inline-flex'>

                    <input type="checkbox" defaultChecked={charAllowed} id='charAllowed'
                    onChange={() => {setCharAllowed((pre) => !pre); }} />

                    <label htmlFor="" className='m-1 text-red-600 font-semibold'>Character</label>

                </span>

            </div>

        </div>
    </>
  )
}

export default App
