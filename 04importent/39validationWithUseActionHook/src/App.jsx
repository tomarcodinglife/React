import { useActionState, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    let regex = /^[A-Z0-9]+$/i;
    let regexForName = /^[A-Za-z0-9@]+$/;

    if (!name || name.length > 5) {
      return {
        error: "Name Not Contain Correct (A-Z) (0-9) less than 5 character",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return { error: "Password Not Contain Correct", name, password };
    } else {
      return { message: "Login Done", name, password };
    }
    console.log(name, password);
  };

  const [data, action, pending] = useActionState(handleLogin);
  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "200px" }}>
        <h1>Validation with useActionState</h1>
        <form action={action}>
          <input
            type="text"
            defaultValue={data?.name}
            name="name"
            placeholder="Enter Username"
          />
          <br />
          <br />
          <input
            type="text"
            defaultValue={data?.password}
            name="password"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <button>Login</button>
          <br />
          <br />
          {data?.message && (
            <span style={{ color: "green" }}>{data?.message}</span>
          )}
          {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
        </form>
      </div>
    </>
  );
}

export default App;
