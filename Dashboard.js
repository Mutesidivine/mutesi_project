import { useState } from "react";
import Department from "./Department";
import Salary_form from "./Salary_form";
import Home from "./Home";
import Employee from "./Employee";
import Report from "./Report";
import Logout from "./Logout";

function Dashboard({ showpage }) {

  const [p, setpage] = useState("Home");

  return (
    <div>

      <div className="flex gap-6 bg-blue-300">

        <button onClick={() => setpage("Home")}>
          Home
        </button>

        <button onClick={() => setpage("Department")}>
          Add_Department
        </button>

        <button onClick={() => setpage("Salary_form")}>
          Add_Salary
        </button>

        <button onClick={() => setpage("Employee")}>
          Add_Employee
        </button>

        <button onClick={() => setpage("Report")}>
          View_Report
        </button>

        {/* Logout Component */}
        <Logout showpage={showpage} />

      </div>

      <br />
      <br />

      {p === "Home" && <Home />}
      {p === "Department" && <Department />}
      {p === "Salary_form" && <Salary_form />}
      {p === "Employee" && <Employee />}
      {p === "Report" && <Report />}

    </div>
  );
}

export default Dashboard;