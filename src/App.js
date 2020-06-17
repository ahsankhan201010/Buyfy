import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Category from "./Pages/Cateogry/Category";
import Product from "./Pages/Product/Product";
import Auth from "./Pages/Auth/Auth";
import Checkout from "./Pages/Checkout/Checkout";
import Profile from "./Pages/Profile/Profile";
import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
import { auth, firestore } from "./Firebase/Firebase";
import { connect } from "react-redux";
import { setCurrentUser, removeCurrentUser } from "./Redux/user/userActions";

function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        var { uid } = user;
        if (uid) {
          var userDoc = await firestore.collection("users").doc(uid).get();
          if (userDoc.exists) {
            var userObj = {
              uid,
              fullName: userDoc.data().fullName,
              email: userDoc.data().email,
            };
            props.setCurrentUser(userObj);
          }
        }
      } else {
        console.log("else");
        props.removeCurrentUser();
      }
    });
  }, []);
  return (
    <div className="app-container">
      <div>
        <Navbar />
      </div>

      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route
            path="/shop/category/:categoryName"
            exact
            component={Category}
          />
          <Route
            path="/shop/category/:categoryName/product/:productId"
            component={Product}
          />
          <Route path="/auth" component={Auth} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/manageprofile" component={Profile} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </div>
  );
}

var actions = {
  setCurrentUser,
  removeCurrentUser,
};

export default connect(null, actions)(App);
