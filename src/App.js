import "./App.css";
import React from 'react';
import Homepage from "./components/homepage/homepage.component";
import { Switch, Link, Route, Router, withRouter } from "react-router-dom";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import { auth } from "./firebase/firebase.utils";
import SignInAndSignUp from "./page/sign-in-and-sign-out/sign-in-and-sign-up.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/SignInAndSignUp" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
