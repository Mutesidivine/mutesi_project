import { useState } from "react";
import Login_form from "./Login_form";
import Create_account from "./Create_account";
import Dashboard from "./Dashboard";
function App(){
const [page,showpage]=useState("Login_form");
return(<div>
  {/*menues*/}
  <div  className="flex gap-6 bg-blue-300">
  {page!=="Dashboard"&&(<div>
  <button onClick={()=>showpage("Login_form")}>Login</button>
  <button onClick={()=>showpage("Create_account")}>Create_account</button>
  </div>)} 
  </div>
  {/*pages to display after clicking on menues*/}
  {page==="Login_form"&&(<Login_form showpage={showpage}/>)}
  {page==="Create_account"&&(<Create_account showpage={showpage}/>)}
  {page==="Dashboard"&&(<Dashboard showpage={showpage}/>)}
  
  </div>
);
}export default App;