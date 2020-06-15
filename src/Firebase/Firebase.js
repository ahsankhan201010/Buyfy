import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAjg_4jAnBwQG0bsoAafyyvbVR_FWnMyt8",
    authDomain: "buyfy-d6e6a.firebaseapp.com",
    databaseURL: "https://buyfy-d6e6a.firebaseio.com",
    projectId: "buyfy-d6e6a",
    storageBucket: "buyfy-d6e6a.appspot.com",
    messagingSenderId: "870553091602",
    appId: "1:870553091602:web:bb0cd09b287533a70ee2cb"
};

firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var provider = new firebase.auth.GoogleAuthProvider();
export var timeStamp = () => firebase.firestore.FieldValue.serverTimestamp();

export default firebase;
