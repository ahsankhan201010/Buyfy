import React from "react";
import "./ProductCard.css";
import Button from './../Button/Button';
import { connect } from 'react-redux';
import { addItemToCart } from './../../Redux/cart/cartActions';
import { Link } from "react-router-dom";

const ProductCard = ({ product, addItemToCart }) => {
  var { name, cost, imageUrl,id, category } = product;
  return (
    <div className="product-card-container">
      <div className="product-card-hover">
          <Button onClick={() => addItemToCart(product) } backgroundColor="black" color="white" style={{width:"80%"}}>ADD TO CART</Button>
          <Link style={{width: "80%"}} to={`/shop/category/${category}/product/${id}`}><Button style={{width:"100%"}}>VIEW PRODUCT</Button></Link>
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
