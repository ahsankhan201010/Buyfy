import React from "react";
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

function App() {
  return (
    <div>
      <Switch>
        <div className="app-container">
          <div className="navbar-view">
            <Navbar />
          </div>
          <div className="app-view">
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
          </div>
        </div>
      </Switch>
    </div>
  );
}

export default App;
