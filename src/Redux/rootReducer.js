import {combineReducers} from "redux"
import userReducer from './user/userReducer';
import cartReducer from "./cart/cartReducer";

var rootReducer = combineReducers({
    currentUser: userReducer,
    cart: cartReducer
})

export default rootReducer;