import React from "react";

function Login({ showpage }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    showpage("Dashboard");
  };

  return (
    <div>
      <center className="bg-white-600 flex items-center justify-center">
        <fieldset>
        <form onSubmit={handleSubmit}>
          

          <h1>Login Form</h1>

          <input
            type="text"
            placeholder="username"
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="password"
          />

          <br />
          <br />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>

        </form>
        </fieldset>
      </center>
    </div>
  );
}

export default Login;  