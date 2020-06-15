import { auth, timeStamp, firestore, provider } from "../../Firebase/Firebase"
import { SET_CURRENT_USER, REMOVE_USER } from './userConstants';

export var setCurrentUser = (userObj) =>({
    type: SET_CURRENT_USER,
    payload: {
        userObj: userObj
    }
    })

 export var signup = (userObj) =>{
     return async(dispactch) => {
        try {
            var {Fullname, Email, Password} = userObj
            var createdUser = await auth.createUserWithEmailAndPassword(Email,Password)
             var userObjforState = {
             Fullname,
             Email,
             uid: createdUser.user.uid
         }
         var userObjForFirestore = {
            Fullname,
            Email,
            createdAt: timeStamp()
        }
        await firestore.collection("users").doc(createdUser.user.uid).set(userObjForFirestore)

         await createdUser.user.updateProfile({
             displayName: Fullname
         })
          
 
 
         dispactch(setCurrentUser(userObjforState))
 
        
 
         } catch (error) {
           console.log(error)
         }

     }
 }  

 export var signin = (userObj) => {
     return async(dispactch) => {
         try {
           
             var {Email,Password} = userObj
           var {user} =  await auth.signInWithEmailAndPassword(Email,Password)
           var {displayName, email, uid} = user
           var userObjforState = {
               Fullname: displayName,
               Email: email,
               uid               
           }
           dispactch(setCurrentUser(userObjforState))
          

         

         } catch (error) {
             console.log(error)
             
         }

     }
 }

export var removeCurrentUser = () => ({
    type: REMOVE_USER
})

 export var signout = () => {
     return async (dispactch) => {
         await auth.signOut()
         

     }
 }

 export var googleSignin = () => {
     return async dispactch => {
    try {
        console.log("Goolgle")
        
        var {user: {displayName,email,uid}, additionalUserInfo: {isNewUser}} = await auth.signInWithPopup(provider)
        var userObjforFirebase = {
            Fullname: displayName,
            Email: email,
            createdAt: timeStamp()
        }
        if(isNewUser){
            await firestore.collection("users").doc(uid).set(userObjforFirebase)
        }

    } catch (error) {
        console.log(error)        
    }    
    }
 }