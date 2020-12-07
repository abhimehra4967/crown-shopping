import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";


const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="">
        Contact
      </Link>
      <Link className="option" to="/SignInAndSignUp">
        {props.userName ? "Sign Out" : "Sign In"}
      </Link>
    </div>
  </div>
);

export default Header;
