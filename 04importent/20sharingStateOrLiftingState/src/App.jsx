import { useState } from "react";
import AddUser from "./components/AddUser.jsx";
import DisplayUser from "./components/DisplayUser.jsx";

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <div>
        <AddUser setUser={setUser} />
        <hr />
        <DisplayUser username={user} />
      </div>
    </>
  );
}
export default App;
