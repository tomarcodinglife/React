import Sujit from "./sujit"
import Tomar from "./tomar"
import Element from "./createelement.jsx"


function App() {
    const username = "Sujit Tomar"

  return (
    <>
      <h1>Hi I am {username}</h1>  {/*  here username called expression */}
      <Sujit/>
      <Tomar/>
      <Element/>
    </>
  )
}

export default App
