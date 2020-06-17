import { auth, timeStamp, firestore, provider } from "../../Firebase/Firebase";
import { SET_CURRENT_USER, REMOVE_USER } from "./userConstants";

export var setCurrentUser = (userObj) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      userObj: userObj,
    },
  };
};

export var signup = (userObj) => {
  return async (dispactch) => {
    try {
      var { fullName, email, password } = userObj;
      var createdUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      var userObjForFirestore = {
        fullName,
        email,
        createdAt: timeStamp(),
      };
      await firestore
        .collection("users")
        .doc(createdUser.user.uid)
        .set(userObjForFirestore);

      await createdUser.user.updateProfile({
        displayName: fullName,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export var signin = (userObj) => {
  return async (dispactch) => {
    try {
      var { email, password } = userObj;
      await auth.signInWithEmailAndPassword(email, password);
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
