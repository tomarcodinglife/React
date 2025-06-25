import { useState } from 'react'
import './App.css'

function App() {
  const [content1, setContent1] = useState("This is the content that will be toggled");
  const [content2, setContent2] = useState("This is the content that will be toggled");

    const toggleContent = () => {
    if (content1 === "This is the content that will be toggled") {
      setContent1("The content has been toggled!");
    } else {
      setContent1("This is the content that will be toggled");
    }
  }

  const toggleContent1 = () => {
    if (content1 === "This is the content that will be toggled") {
      setContent1("The content has been toggled!");
    } else {
      setContent1("This is the content that will be toggled");
    }
  }

  const toggleContent2 = () => {
    if (content1 === "This is the content that will be toggled") {
      setContent1("The content has been toggled by Button 2!");
    } else {
      setContent1("This is the content that will be toggled");
    }
  }

  // -----------------------------------------------------------------------------------
  //   const toggleContent3 = () => {
  //   if (content2 === "This is the content that will be toggled") {
  //     setContent2("The content has been toggled!");
  //   } else {
  //     setContent2("This is the content that will be toggled");
  //   }
  // }

  // const toggleContent4 = () => {
  //   if (content2 === "This is the content that will be toggled") {
  //     setContent2("The content has been toggled by Button 2!");
  //   } else {
  //     setContent2("This is the content that will be toggled");
  //   }
  // }

  // -----------------------------------------------------------------------------------



  const handleButtonClick = (event) => {
    if (event.target.textContent === "Toggle Btn 01") {
      toggleContent();
    } else if (event.target.textContent === "Toggle Btn 02") {
      toggleContent2();
    }
  }

  // const handleKeyPress = (event) => { 
  //   if (event.key === "1") {
  //     toggleContent();
  //   }
  // }
  // const handleKeyPress2 = (event) => {
  //   if (event.key === "2") {
  //     toggleContent2();
  //   }
  // }


  return (
    <>
      <div>
          <div>
            <h1>Toggle in React</h1>
          </div>
          <div>
            <div>
              <button onClick={toggleContent}>Toggle Btn 01</button>
              {/* <button onClick={toggleContent2}>Toggle Btn 02</button> */}
              <p>First :- {content1}</p>
            </div>
            <div>
              <button onClick={handleButtonClick}>Toggle Btn 01</button>
              {/* <button onClick={handleButtonClick}>Toggle Btn 02</button> */}
              <p>Second :- {content2}</p>
            </div>
          </div>
      </div>

    </>
  )
}

export default App
