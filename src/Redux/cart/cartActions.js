import { ADD_ITEM_TO_CART } from './cartConstants';

export var addItemToCart = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: {
        item
    }
})