import React from "react";
import "./CartNavItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const CartNavItem = ({ isDropdownOpen }) => {
  return (
    <div className="cart-nav-item flex">
      <h3>cart</h3>
      {isDropdownOpen ? (
        <FontAwesomeIcon icon={faCaretUp} />
      ) : (
        <FontAwesomeIcon icon={faCaretDown} />
      )}
    </div>
  );
};

export default CartNavItem;
