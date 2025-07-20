import { useEffect } from "react";
import { useState, useActionState } from "react";

let msgErrorColor = {
  color : 'red'
}

let msgColor = {
  color : 'green'
}

const handlSubmit = async (prevData, formData) => {
  let username = formData.get("username");
  let password = formData.get("password");
  await new Promise((res) => setTimeout(res, 2000));
  // console.log("Handle Submit Called", username, password);

  if (username && password) {
    return {Message : 'Submitted'};
  } else {
    return {Error : "Please Enter Correct Details"};
  }
};

// function showMessage(message) {
//   return <h3>{message}</h3>;
// }

function App() {
  const [msg, setMsg] = useState(0);
  const [data, action, pending] = useActionState(handlSubmit, undefined);
  console.log(data)

  return (
    <>
      <h1>useAction State Hook</h1>
      <div>
        <form action={action}>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            autoComplete="current-username"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            autoComplete="current-password"
          />
          <br />
          <br />
          <button disabled={pending}>Login</button>
        </form>
        {
          data?.Error && <span style={msgErrorColor}>{data?.Error}</span>
        }
        {
          data?.Message && <span style={msgColor}>{data?.Message}</span>
        }
      </div>
    </>
  );
}

export default App;
