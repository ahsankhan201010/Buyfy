import React from "react";
import "./Shop.css";
import CategoryContainer from "./../../Components/CategoryContainer/CategoryContainer";

const Shop = () => {
  return (
    <div className="shop-page-container">
      <div className="category-area">
        <CategoryContainer />
      </div>
    </div>
  );
};

export default Shop;
