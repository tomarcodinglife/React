import { useTransition, useState } from 'react'

const msgStyle = {
  color: 'green',
  fontSize: '20px',
  fontWeight: 'bold',
}


function App() {
  // const [pending, setPending] = useState(false)
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState('');  

  // const handleButton = () => {
  //   setPending(true)
  //   setTimeout(() => {
  //     setPending(false)
  //   }, 2000)
  // }

  // const handleButton =async() => {
  //   setPending(true)
  //   await new Promise((res) => setTimeout(res, 2000))
  //   setPending(false)
  // }

  const messageHandler = () => {
    setMessage('Sucess')
  }

  const handleButton = () => {
      startTransition(async() => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log('Transition completed')
      })
  }

  const eraseMessage = () => {
    setMessage('')
  } 

  const timeSet = () => {
    setTimeout(() => {
      messageHandler()
    }, 2000)
  }

  const clearInterval = () => {
    setTimeout(() => {
      eraseMessage()
    }, 4000)
  }

  const handleCaller = () => {
    timeSet()
    handleButton()
    clearInterval(timeSet)
  }


  return (
    <>
      <div>
        <h1>useTransition Hook</h1>
        <button disabled={pending} onClick={handleCaller}>Click</button>
        <div style={msgStyle}>{message}</div>
      </div>
    </>
  )
}

export default App
