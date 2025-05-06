import Sujit from "./sujit"
import Tomar from "./tomar"


function App() {
    const username = "Sujit Tomar"

  return (
    <>
      <h1>Hi I am {username}</h1>  {/*  here username called expression */}
      <Sujit/>
      <Tomar/>
    </>
  )
}

export default App
