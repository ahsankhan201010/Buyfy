import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <NavLink to="/">
          <h1>logo</h1>
        </NavLink>
      </div>

      <div className="shop flex">
        <NavLink to="/shop">
          <h3>shop</h3>
        </NavLink>
      </div>
      <div className="cart flex">
        <NavLink to="/checkout">
          <h3>cart</h3>
        </NavLink>
      </div>

      <div className="user flex">
        <NavLink to="/auth">
          <h3>user</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
