import { useTransition, useState } from 'react'


function App() {
  // const [pending, setPending] = useState(false)
  const [pending, startTransition] = useTransition();

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

  const handleButton = () => {
      startTransition(async() => {
        await new Promise((res) => setTimeout(res, 2000))
      })
  }

  return (
    <>
      <div>
        <h1>useTransition Hook</h1>
        <button disabled={pending} onClick={handleButton}>Click</button>
      </div>
    </>
  )
}

export default App
