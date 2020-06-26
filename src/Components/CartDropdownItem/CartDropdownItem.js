import React from "react";
import "./CartDropdownItem.css";
import Header from "./../Header/Header";
import Paragrapgh from "./../Paragrapgh/Paragraph";

const CartDropdownItem = ({
  item: { name, category, imageUrl, quantity, cost }
}) => {
  return (
    <div className="cart-dropdown-item-container">
      <div
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "100% 100%, cover",
        }}
        className="cart-dropdown-item-img"
      ></div>
      <div className="cart-dropdown-item-info flex">
        <div>
          <Paragrapgh fontWeight="bold" fontSize={12}>
            {name}
          </Paragrapgh>
          <Paragrapgh fontSize={8}>{category}</Paragrapgh>
          <Paragrapgh fontSize={12}>{`${quantity} X ${cost}$`}</Paragrapgh>
        </div>
      </div>
    </div>
  );
};

export default CartDropdownItem;
