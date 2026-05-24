import React, { useState } from "react";

function Login_form({ showpage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const h = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        showpage("Dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={h}>
        <h2>Login Form</h2>

        UserName:
        <input
          type="text"
          required
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br />
        <br />

        Password:
        <input
          type="password"
          required
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login_form;