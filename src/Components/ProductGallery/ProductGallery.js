import React,{useState} from 'react'
import "./ProductGallery.css"

const ProductSelectorImage = (props) => {
    var { imageURL, mainImagehHandler, mainImage } = props;
    // console.log(imageURL,mainImage)
    return (
        <div  style={{background: imageURL, transform: mainImage === imageURL && "scale(1.1)"}} onClick={() => mainImagehHandler(imageURL)} className="image-selector">

        </div>
    )
}

const ProductGallery = (props) => {
    var {galleryArr} = props;
    var [mainImage, setMainImage] = useState(galleryArr[0])
    var mainImagehHandler = (img) => { setMainImage(img) }
    return (
        <div className="product-gallery-container">
            <div style={{background: mainImage}} className="product-gallery-main-image">

            </div>
            <div className="product-gallery-image-selector">
                {galleryArr && galleryArr.map((img) => <ProductSelectorImage key={img} mainImagehHandler={mainImagehHandler} mainImage={mainImage} imageURL={img}  /> )}
            </div>
        </div>
    )
}

export default ProductGallery
