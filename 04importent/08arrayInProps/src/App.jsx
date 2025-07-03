import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  let users = [
    { id: 1, name: 'John', age: 30, email: "test@gmail.com", country: "USA", mobile: "1234567890", college: "ABC University" },
    { id: 2, name: 'John', age: 30, email: "test@gmail.com", country: "USA", mobile: "1234567890", college: "ABC University" },
    { id: 3, name: 'John', age: 30, email: "test@gmail.com", country: "USA", mobile: "1234567890", college: "ABC University" },
    { id: 4, name: 'John', age: 30, email: "test@gmail.com", country: "USA", mobile: "1234567890", college: "ABC University" },
    { id: 5, name: 'John', age: 30, email: "test@gmail.com", country: "USA", mobile: "1234567890", college: "ABC University" },
  ]

  return (
    <div>
      <User user={users} />
    </div>
  )
}

export default App
