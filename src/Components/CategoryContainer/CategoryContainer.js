import React, { useState } from "react";
import "./CategoryContainer.css";
import CategoryTab from "../CategoryTab/CategoryTab";
import { products } from "./../../utility/data";
import { productCategorization } from "../../utility/utility";

const CategoryContainer = () => {
  var categorizedProducts = null;
  useState(() => {
    categorizedProducts = productCategorization(products);
  }, []);
  return (
    <div className="category-container">
      {categorizedProducts &&
        categorizedProducts.map(({ category, products }) => (
          <CategoryTab key={category} category={category} products={products} />
        ))}
    </div>
  );
};

export default CategoryContainer;
