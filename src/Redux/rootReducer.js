import {combineReducers} from "redux"
import userReducer from './user/userReducer';
import cartReducer from "./cart/cartReducer";
import productReducer from './product/productReducer';

var rootReducer = combineReducers({
    currentUser: userReducer,
    cart: cartReducer,
    products: productReducer
})

export default rootReducer;