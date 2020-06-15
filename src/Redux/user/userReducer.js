import { SET_CURRENT_USER, REMOVE_USER } from "./userConstants"

var initialState={
    currentUser:null
}
var UserReducer=(state=initialState,action)=>{
    var {type,payload}=action
    switch(type){
        case SET_CURRENT_USER:
           return {...state, currentUser: payload.userObj };
        case REMOVE_USER:
            return {...state, currentUser: null};        
        default:
            return state

    }

}
export default UserReducer
