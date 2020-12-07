import "./App.css";
import React from "react";
import Homepage from "./components/homepage/homepage.component";
import { Switch, Link, Route, Router, withRouter } from "react-router-dom";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfile } from "./firebase/firebase.utils";
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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      
      
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header userName={this.currentUser} />
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
