import React from "react";
import "./ProductCard.css";
import Button from './../Button/Button';

const ProductCard = ({ product: { name, cost, imageUrl } }) => {
  return (
    <div className="product-card-container">
      <div className="product-card-hover">
          <Button backgroundColor="black" color="white" style={{width:"80%"}}>ADD TO CART</Button>
          <Button style={{width:"80%"}}>VIEW PRODUCT</Button>
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

export default ProductCard;
