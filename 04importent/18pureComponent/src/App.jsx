import React, {useState} from 'react';
import ImpureComponent from './components/ImpureComponent';
import PureComponent from './components/PureComponent';


function App() {


  return (
    <>
      <PureComponent />
      <ImpureComponent />
    </>
  )
}

export default App
