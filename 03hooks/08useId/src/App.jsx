import { useId } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useId Hook</h1>
      <UserForm/>
      <hr />
      <UserForm/>
    </>
  );
}

function UserForm() {
  // for unique id
  const name = useId();
  const password = useId();
  const skills = useId();
  const terms = useId();

  // form
  return (
    <div>
      <form action="">

        <div>
          <label htmlFor={name}>USERNAME</label>
          <input id={name} type="text" placeholder="username"/>
        </div>

        <br />
        <br />

        <div>
          <label htmlFor={password}>PASSWORD</label>
          <input id={password} type="text" placeholder="password"/>
        </div>

        <br />
        <br />
        
        <div>
          <label htmlFor="skills" >SKILL</label>
          <select name="skills" id={skills} htmlFor={skills}>
            <option value="cpp">CPP</option>
            <option value="python">Python</option>
            <option value="javascript">javascript</option>
            <option value="php">Php</option>
          </select>
        </div>

        <br />
        <br />

        <div>
          <input type="checkbox" id={terms}/>
          <label htmlFor={terms}>All terms condition accepted</label>
        </div>

      </form>
    </div>
  );
}

export default App;
