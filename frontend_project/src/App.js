import { useState } from "react";
import Login from "./Login";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
 

function App() {
  const [page, showpage] = useState("Login");

  return (<div>
    
    
    <div className="flex gap-4 bg-blue-300 bg-white-600 flex items-center justify-center">
      {page!=="Dashboard"&&(<div>
        <button onClick={()=>showpage("Login")}>Login</button>
        <button onClick={()=>showpage("Account")}>Account</button>

        </div>)}
        </div>
        {/*pages to display after clicking on menus */}
        {page==="Login"&&(<Login showpage={showpage}/>)}
        {page==="Account"&&(<Account showpage={showpage}/>)}
        {page==="Dashboard" && (<Dashboard showpage={showpage}/>)}
        {page==="Logout" && (<Logout showpage={showpage}/>)}
        

        </div>
      );
    }
    export default App;


 