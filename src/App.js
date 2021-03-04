import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      {/* Because by doing this our header is always present and rendered 
          despite whatever react-router-dom Switch component and Route components
          decide to render onto the page  */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
