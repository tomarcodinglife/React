import React from 'react'
import { useState } from 'react';
import './index.css' 
import './App.css'

function App() {
  const [color, setColor] = useState('black');

  return (
    <div className="h-screen w-full duration-300 m-0 p-0 bg-yellow-400" style={{ backgroundColor: color }}>
        <div className="fixed bottom-10 flex flex-row gap-4 bg-white rounded-lg p-1 h-12 w-full justify-center items-center">
          
           <button className="bg-red-700 p-4 rounded-lg p-4 w-15 h-10 text-white"  onClick={()=>{setColor('red')}}>Red</button>
           <button className="bg-cyan-700 p-4 rounded-lg p-4 w-15 h-10 text-white"  onClick={()=>{setColor('cyan')}}>Cyan</button>
           <button className="bg-blue-700 p-4 rounded-lg p-4 w-15 h-10 text-white"  onClick={()=>{setColor('blue')}}>Blue</button>
           <button className="bg-gray-700 p-4 rounded-lg p-4 w-15 h-10 text-white"  onClick={()=>{setColor('black')}}>Black</button>
           <button className="bg-yellow-600 p-4 rounded-lg p-4 w-15 h-10 text-white"  onClick={()=>{setColor('yellow')}}>yellow</button>
           <button className="bg-green-700 p-4 rounded-lg p-4 w-15 h-10 text-white"  onClick={()=>{setColor('green')}}>Green</button>

        </div>
    </div>
  );

}

export default App
