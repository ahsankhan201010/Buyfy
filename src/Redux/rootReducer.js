import {combineReducers} from "redux"
import userReducer from './user/userReducer';

var rootReducer = combineReducers({
    currentUser: userReducer
})

export default rootReducer;