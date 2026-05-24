import React from "react";

function Department() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
          Department Registration
        </h1>

        {/* Department Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Department Name
          </label>,p;

          <input
            type="text"
            placeholder="Enter Department Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Salary ID */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Salary ID
          </label>

          <input
            type="number"
            placeholder="Enter Salary ID"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300"
        >
          SEND
        </button>

      </form>
    </div>
  );
}

export default Department;