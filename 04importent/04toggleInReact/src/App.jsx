import { useState } from 'react'
import './App.css'

function App() {

  let ctn01 = "This is the content that will be toggled content1";
  let ctn02 = "This is the content that will be toggled content2";

  const [content1, setContent1] = useState(ctn01);
  const [content2, setContent2] = useState(ctn02);

    const toggleContent = () => {
    if (content1 === ctn01) {
      setContent1("The content has been toggled! content1");
    } else {
      setContent1(ctn01);
    }
  }

  const handleButtonClick = (event) => {
    if (content2 === ctn02) {
      setContent2("The content has been toggled! content2");
    }  else {
      setContent2(ctn02);
    }
  }


  return (
    <>
      <div>
          <div>
            <h1>Toggle in React</h1>
          </div>
          <div>

            <div>
              <button onClick={toggleContent}>Toggle Btn 01</button>
              <p>First :- {content1}</p>
            </div>

            <div>
              <button onClick={handleButtonClick}>Toggle Btn 02</button>
              <p>Second :- {content2}</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
