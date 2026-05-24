import React from "react";

function Employee() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Employee Registration
        </h1>

        {/* Salary ID */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Salary ID</label>
          <input
            type="number"
            placeholder="Enter Salary ID"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Position */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Position</label>
          <input
            type="text"
            placeholder="Enter Position"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Telephone */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Telephone</label>
          <input
            type="text"
            placeholder="Enter Telephone"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Gender</label>

          <div className="flex gap-4">
            <label>
              <input type="radio" name="gender" value="Male" required /> Male
            </label>

            <label>
              <input type="radio" name="gender" value="Female" required /> Female
            </label>
          </div>
        </div>

        {/* Hired Date */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Hired Date</label>
          <input
            type="date"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Department Code */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Department Code</label>
          <input
            type="number"
            placeholder="Enter Department Code"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
        >
          Send
        </button>

      </form>
    </div>
  );
}

export default Employee;