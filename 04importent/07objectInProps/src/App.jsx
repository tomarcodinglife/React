import React from 'react'
import { useState } from 'react'
import User from './User'

function App() {

  let user1 = {
    name: "Sujit",
    age: 22,
    email: "email@test.com"
  }

    let user2 = {
    name: "Amit",
    age: 23,
    email: "email@test.com"
  }

      let user3 = {
    name: "Sohan",
    age: 23,
    email: "email@test.com"
  }

  return (
    <div>
      <h1>User Details </h1>
      <User user={user1} />
      <User user={user2} />
      <User user={user3} />
    </div>
  )
}

export default App
