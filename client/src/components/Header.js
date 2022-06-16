import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="NavBar">
      <div className="AppTitle">
        <Link to="/">Stream Platform</Link>
      </div>
      <div>
        <Link to="/">Streams</Link>
      </div>
      <GoogleAuth className="Login" />
      {/*
      <div className="Login">
        <Link to="/">Login</Link>
      </div>
  */}
    </div>
  );
};

export default Header;
