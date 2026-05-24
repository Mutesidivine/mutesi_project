import React from "react";

function Account() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <center>
      <form className="bg-white p-8 rounded-lg shadow-md w-80">

        <h1 className="text-2xl font-bold text-center mb-6">
          Account Form
        </h1>

        <input
          type="text"
          placeholder="Username"
          required
          className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border border-gray-300 p-2 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
        >
          Create Account
        </button>

      </form>
      </center>
    </div>
  );
}

export default Account;