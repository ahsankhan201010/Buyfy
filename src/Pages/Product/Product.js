import React from "react";
import "./Product.css"
import ContentContainer from "./../../Components/ContentContainer/ContentContainer";
import ProductGallery from './../../Components/ProductGallery/ProductGallery';

const Product = () => {
  return (
    <ContentContainer>
      <div className="product-page-layout">
        <div className="product-info">

        </div>
        <div className="product-gallery">
            <ProductGallery galleryArr={["red","orange","green","purple"]} />
        </div>
      </div>
    </ContentContainer>
  );
};

export default Product;
