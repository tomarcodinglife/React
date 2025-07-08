import { useState } from 'react'
import DigitalClock from './components/digitalClock'


function App() {
  const [propColor, setpropColor] = useState("red")

  const handleColorChange = (e) => {
    setpropColor(e.target.value)
  }

  return (
    <>
      <div>
        <h1>Digital Clock</h1>
        <select name="color" id="color" onChange={handleColorChange} value={propColor}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="brown">Brown</option>
          <option value="cyan">Cyan</option>
        </select>
        {
          <DigitalClock propColor={propColor}/>
        }
      </div>
    </>
  )
}

export default App
