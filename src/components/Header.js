import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
          <li className="px-4 text-red-800">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-red-800">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 text-red-800">Contact</li>
          <li className="px-4 text-red-800">Cart</li>
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
