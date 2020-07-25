import React from "react";
import "./CategoryTab.css";
import ProductCard from "../ProductCard/ProductCard";
import RoundBtn from "../RoundBtn/RoundBtn";

const CategoryTab = (props) => {
  var { category, products } = props;
  return (
    <div className="category-tab-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
        <div className="view-more-btn">
          <RoundBtn link={`/shop/category/${category}`} />
        </div>
    </div>
  );
};

export default CategoryTab;
