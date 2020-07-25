import React, { useEffect } from "react";
import "./Category.css";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import { connect } from "react-redux";
import { fetchProductsOfCategory } from "./../../Redux/product/productActions";
import ProductCard from "./../../Components/ProductCard/ProductCard";

const Category = (props) => {
  var {
    fetchProductsOfCategory,
    products,
    match: {
      params: { categoryName },
    },
  } = props;
  useEffect(() => {
    fetchProductsOfCategory(categoryName);
  }, []);
  return (
    <ContentContainer>
      <div className="category-products-grid">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </ContentContainer>
  );
};

var actions = {
  fetchProductsOfCategory,
};

var mapState = (state) => ({
  products: state.products,
});

export default connect(mapState, actions)(Category);
