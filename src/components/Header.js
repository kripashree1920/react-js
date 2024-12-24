import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const location = useLocation()
  const headerComponenets = [
    {
      name:'Home',
      path:"/",
      id:0
    },
    {
      name:'About us',
      path:"/about",
      id:1

    },
    {
      name:"Contact",
      path:"/contact-us",
      id:2

    },
    {
      name:"Cart",
      path:"",
      id:3
    }
  ]
  return (
    <div className="flex justify-between shadow-md px-5">
      <div className="flex items-center align-middle">
        <img src={APP_LOGO} className="w-40 " alt="app-logo" />
      </div>

      <div className="flex items-center m-3">
        <ul className="flex ">
          <li
            className={`px-4 flex ${
              onlineStatus ? "text-green-500" : "text-red-600"
            }`}
          >
            Online status :{" "}
            <div
              className={`w-3 h-3 mt-2 ml-1 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-600"
              }`}
            ></div>
          </li>
 
          {headerComponenets.map((headerList)=>{
            return(
              <li className="px-4 mx-4 text-red-800" key={headerList?.id} >
              <Link to={headerList.path} className={location.pathname === headerList.path ? 'border-b-4 border-yellow-500 pb-2' : ''}>{headerList.name}</Link></li>
            )
          })}
          
          <button
            className="  text-white bg-red-800 rounded-md  px-4"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
