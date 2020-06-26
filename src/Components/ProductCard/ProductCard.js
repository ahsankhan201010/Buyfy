import React from "react";
import "./ProductCard.css";
import Button from './../Button/Button';
import { connect } from 'react-redux';
import { addItemToCart } from './../../Redux/cart/cartActions';

const ProductCard = ({ product, addItemToCart }) => {
  var { name, cost, imageUrl } = product;
  return (
    <div className="product-card-container">
      <div className="product-card-hover">
          <Button onClick={() => addItemToCart(product) } backgroundColor="black" color="white" style={{width:"80%"}}>ADD TO CART</Button>
          <Button  style={{width:"80%"}}>VIEW PRODUCT</Button>
      </div>
      <div
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "100% 100%,cover",
        }}
        className="product-card-img"
      ></div>
      <div className="product-card-info">
        <div className="product-info-name">{name}</div>
        <div className="product-info-price">{`${cost}RS`}</div>
      </div>
    </div>
  );
};

var actions = {
  addItemToCart
}

export default connect(null,actions)(ProductCard);
