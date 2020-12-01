import "./App.css";
import Homepage from "./components/homepage/homepage.component";
import { Switch, Link, Route, Router, withRouter } from "react-router-dom";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
