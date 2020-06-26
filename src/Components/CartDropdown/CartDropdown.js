import React from "react";
import "./CartDropdown.css";
import CartDropdownItem from "../CartDropdownItem/CartDropdownItem";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-dropdown-items">
        {cartItems &&
          cartItems.map((item) => (
            <CartDropdownItem key={item.id} item={item} />
          ))}
      </div>
      <div className="cart-dropdown-btn flex">
        <Link style={{width:"100%"}} to="/checkout">
          <Button
            backgroundColor="black"
            color="white"
            fontSize={18}
            style={{ width: "100%" }}
          >
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

var mapState = (state) => ({
  cartItems: state.cart,
});

export default connect(mapState)(CartDropdown);
