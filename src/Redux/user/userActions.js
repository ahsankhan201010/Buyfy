import { auth, timeStamp, firestore, provider } from "../../Firebase/Firebase";
import { SET_CURRENT_USER, REMOVE_USER } from "./userConstants";

export var setCurrentUser = (userObj) => {
    console.log(userObj)
    return {
        type: SET_CURRENT_USER,
        payload: {
          userObj: userObj,
        },
      }
};

export var signup = (userObj) => {
  return async (dispactch) => {
    try {
      var { fullName, email, password } = userObj;
      var createdUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      var userObjforState = {
        fullName,
        email,
        uid: createdUser.user.uid,
      };
      var userObjForFirestore = {
        fullName,
        email,
        createdAt: timeStamp(),
      };
      console.log(userObjForFirestore);
      await firestore
        .collection("users")
        .doc(createdUser.user.uid)
        .set(userObjForFirestore);

      await createdUser.user.updateProfile({
        displayName: fullName,
      });

      dispactch(setCurrentUser(userObjforState));
    } catch (error) {
      console.log(error);
    }
  };
};

export var signin = (userObj) => {
  return async (dispactch) => {
    try {
      var { email, password } = userObj;
      var { user } = await auth.signInWithEmailAndPassword(email, password);
      var { displayName, email, uid } = user;
      var userObjforState = {
        fullName: displayName,
        email: email,
        uid,
      };
    //   console.log(userObjforState)
      dispactch(setCurrentUser(userObjforState));
    } catch (error) {
      console.log(error);
    }
  };
};

export var removeCurrentUser = () => ({
  type: REMOVE_USER,
});

export var signout = () => {
  return async (dispactch) => {
    await auth.signOut();
  };
};

export var googleSignin = () => {
  return async (dispactch) => {
    try {
      console.log("Goolgle");

      var {
        user: { displayName, email, uid },
        additionalUserInfo: { isNewUser },
      } = await auth.signInWithPopup(provider);
      var userObjforFirebase = {
        Fullname: displayName,
        Email: email,
        createdAt: timeStamp(),
      };
      if (isNewUser) {
        await firestore.collection("users").doc(uid).set(userObjforFirebase);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
