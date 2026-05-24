import { useState } from "react";
import Department from "./Department";
import Salary from "./Salary";
import Home from "./Home";
import Employee from "./Employee";
import Report from "./Report";

function Dashboard({ Showpage }) {
  const [page, Setpage] = useState("Home");

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6 shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-10">
          Dashboard
        </h1>

        <div className="flex flex-col gap-4">

          <button
            onClick={() => Setpage("Home")}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition duration-300"
          >
            Home
          </button>

          <button
            onClick={() => Setpage("Department")}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition duration-300"
          >
            Add Department
          </button>

          <button
            onClick={() => Setpage("Salary")}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition duration-300"
          >
            Add Salary
          </button>

          <button
            onClick={() => Setpage("Employee")}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition duration-300"
          >
            Add Employee
          </button>

          <button
            onClick={() => Setpage("Report")}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition duration-300"
          >
            View Report
          </button>

          <button
            onClick={() => Showpage("Login")}
            className="bg-red-500 hover:bg-red-700 py-3 rounded-lg transition duration-300 mt-6"
          >
            Logout
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[90vh]">

          {page === "Home" && <Home />}
          {page === "Department" && <Department />}
          {page === "Salary" && <Salary />}
          {page === "Employee" && <Employee />}
          {page === "Report" && <Report />}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;