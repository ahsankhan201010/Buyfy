import React, { useEffect } from "react";
import "./CategoryContainer.css";
import CategoryTab from "../CategoryTab/CategoryTab";
import { connect } from 'react-redux';
import { fetchLimitedProducts } from './../../Redux/product/productActions';
import { productCategorization } from "../../utility/utility";


const CategoryContainer = (props) => {
  var {fetchLimitedProducts, categorizedProducts} = props;
  useEffect(() => {
    fetchLimitedProducts()
  },[])
  return (
    <div className="category-container">
      {categorizedProducts &&
        categorizedProducts.map(({ category, products }) => (
          <CategoryTab key={category} category={category} products={products} />
        ))}
    </div>
  );
};

var actions = {
  fetchLimitedProducts
}

var mapState = (state) => ({
  categorizedProducts: productCategorization(state.products)
})

export default connect(mapState,actions)(CategoryContainer);
