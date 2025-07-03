import { useState } from 'react'
import User from './User'
import UserDetails from './UserDetails'
import ArrayData from './ArrayData'

function App() {
  const [count, setCount] = useState(1)
  const [student, setStudent] = useState("John Doe")

  let users = [
    { id: 1, name: 'John', age: 30, email: "test@google.com", country: "USA", mobile: "1234567890", college: "ABC University" },
    { id: 2, name: 'Pitter', age: 28, email: "test@gmail.com", country: "Germany", mobile: "189567890", college: "BN University" },
    { id: 3, name: 'Alex', age: 22, email: "test@yahoo.com", country: "UK", mobile: "1234567890", college: "AILU Institute" },
    { id: 4, name: 'Joden', age: 29, email: "test@email.com", country: "USA", mobile: "54545454", college: "Manipal University" },
    { id: 5, name: 'Desel', age: 27, email: "test@tcs.com", country: "India", mobile: "12545490", college: "HCL University" },
    { id: 6, name: 'tomar', age: 23, email: "test@ibm.com", country: "Italy", mobile: "1237854590", college: "ATech University" },
  ]

  const handleIncrement = () => {
    if(count < users.length) {
      setCount(count + 1);
    }else {
      setCount(1);
    }
  }

  const handleDecrement = () => {
    if(count > 1) {
      setCount(count - 1);
    }else {
      setCount(users.length);
    }
  }

  return (
    <div>
      <User user={users} />
      <hr />
      {/* -------------------------------------------------------------------- */}
      <div style={{ textAlign: "center", marginTop: "20px", padding: "20px", border: "1px solid black" }}>
          <h1>User # {count}</h1>
          <button onClick={handleIncrement}>Next User</button>
          <button onClick={handleDecrement}>Previous User</button>

          <UserDetails user={users[count-1]} />
      </div>
      <hr />
      --------------------------------------------------------------------
      <ArrayData user={users[count].name} />
      <hr />
      {student && (
        <div style={{ textAlign: "center", marginTop: "20px", padding: "20px", border: "1px solid black" }}>
          <h1>Student Name:{student}</h1>
          <button onClick={() => setStudent("Amit")}>Update Student</button>
        </div>
      )}

    </div>
  )
}

export default App;
