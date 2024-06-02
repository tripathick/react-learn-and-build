import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
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
             </ul>
         </div>
     </div>
    )
 
 };
 
export default HeaderComponent; 