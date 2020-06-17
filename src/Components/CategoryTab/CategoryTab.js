import React from "react";
import "./CategoryTab.css";
import ProductCard from "../ProductCard/ProductCard";

const CategoryTab = (props) => {
  var { category, products } = props;
  return (
    <div className="category-tab-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
    </div>
  );
};

export default CategoryTab;
