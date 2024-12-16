import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = ()=>{
 
     const [btnName, setBtnName] = useState("Login")

    return (
        <div className="header">
        <div className='app-logo'>
            <img src={APP_LOGO} alt="app-logo" />
        </div>

        <div className="nav-container">
            <ul className="nav-items">
                <li>
                 <Link to="/">Home</Link>
                 </li>
                <li>
                 <Link to="/about">About us</Link>
                  </li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=>{ btnName =='Login' ? setBtnName('Logout'): setBtnName('Login');
                }}>{btnName}</button>

            </ul>
        </div>
        </div>
    )
}

export default Header;