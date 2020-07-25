import { products } from './../../utility/data';
import { SET_PRODUCTS } from './productConstants';

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
