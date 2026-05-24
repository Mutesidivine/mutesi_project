import React from "react";

function Salary() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 hover:bg-gray-500 text-white px-4 py-2">
        
        <center>
          <form>

            SalaryRegistration
            <br /><br />

            GlossSalary:
            <input type="number" placeholder="GlossSalary" required />
            <br /><br />

            TotalDeduction:
            <input type="number" placeholder="TotalDeduction" required />
            <br /><br />

            NetSalary:
            <input type="number" placeholder="NetSalary" required />
            <br /><br />

            Month:
            <input type="text" placeholder="Month" required />
            <br /><br />

            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">
              Send
            </button>

          </form>
        </center>

      </div>
    </div>
  );
}

export default Salary;