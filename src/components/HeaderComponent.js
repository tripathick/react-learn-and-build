import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {

    // let btnName = "login";
    const[btnName , setBtnName] = useState("Login")
    return (
     <div className="header">
         <div className="logo">
             <img className="logo-img" src={LOGO_URL} alt="" />
         </div>
         <div className="nav-items">
             <ul>
                 <li>Home</li>
                 <li>About US</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
                 <button className="login-btn" 
                 onClick={ () => { 
                      btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
                    
                    }  
                  }>{btnName}</button>
             </ul>
         </div>
     </div>
    )
 
 };
 
export default HeaderComponent; 