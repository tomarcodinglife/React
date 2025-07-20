import { useState, useActionState } from "react";

const handlSubmit = async (prevData, formData) => {
  let username = formData.get("username");
  let password = formData.get("password");
  await new Promise((res) => setTimeout(res, 2000));
  // console.log("Handle Submit Called", username, password);

  if (username && password) {
    return message("Data Submited");
  } else {
    return Error("Please Enter Correct Username & Password");
  }
};

function showMessage(message) {
  return <h3>{message}</h3>;
}

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
          <span></span>
        </form>
      </div>
    </>
  );
}

export default App;
