import React,{useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CartNavItem from "../CartNavItem/CartNavItem";
import CartDropdown from "../CartDropdown/CartDropdown";

const Navbar = () => {
  var [isDropdownOpen, dropdownToggle] = useState(false)
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <h1>logo</h1>
        </Link>
      </div>

      <div className="shop flex">
        <Link to="/shop">
          <h3>shop</h3>
        </Link>
      </div>
      <div className="cart flex">
        <div onClick={() => dropdownToggle((presState) => !presState)} >
          <CartNavItem isDropdownOpen={isDropdownOpen} />
         { isDropdownOpen && <CartDropdown/>}
        </div>
      </div>

      <div className="user flex">
        <Link to="/auth">
          <h3>user</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
