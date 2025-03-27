import { useState, useContext } from "react";
// import Logo from "../assets/img/foodvilla.png";

import useOnline from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Title = () => (
  
  
    <img data-testid="logo" className="h-28 p-2 px-5" alt="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />

);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (

    <div className="flex justify-between shadow-lg text-amber-800">
    <Title />
    <div className="nav-items">
      <ul className="flex py-10">
        <li className="px-2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
        </li>
  
        <li className="px-2">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            About
          </NavLink>
        </li>
  
        <li className="px-2">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Contact
          </NavLink>
        </li>
  
        <li className="px-2">
          <NavLink
            to="/instamart"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Instamart
          </NavLink>
        </li>
  
        <li className="px-2" data-testid="cart">
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Cart - {cartItems.length} items
          </NavLink>
        </li>
      </ul>
    </div>
  
    <div data-testid="online-status" className="px-2 py-10">
      Online status : {isOnline ? "✅" : "🔴"}
    </div>
  
    <div className="flex justify-between px-20 py-10">
      {isLoggedIn ? (
        <button
          className="bg-amber-800 text-white border border-amber-800 rounded-md px-5"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-amber-800 text-white px-5 border border-amber-800 rounded-md"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  </div>
  );
};

export default Header;
