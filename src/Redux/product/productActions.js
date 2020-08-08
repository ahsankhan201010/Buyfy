import { products, categories } from './../../utility/data';
import { SET_PRODUCTS } from './productConstants';

export var fetchLimitedProducts = () => async (dispatch) => {
    try {
        //fetch categories
        var productCategories = categories;
        //lloop thorugh all categories and fetch 3 products of each
        var productsArr = [];
        productCategories.forEach((category) => {
            products.forEach((product) => {
                if(product.category === category) productsArr.push(product);
            })
        })
        dispatch({
            type: SET_PRODUCTS,
            payload: {
                products: productsArr
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export var fetchProductsOfCategory = (category) => async (dispatch) => {
    try {
        var categoryProducts = products.filter((product) => product.category === category );
        dispatch({
            type: SET_PRODUCTS,
            payload: {
                products: categoryProducts
            }
        })
    } catch (error) {
        console.log(error)
    }
};


// export var fetchProducts = () =