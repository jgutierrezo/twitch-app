import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import GoogleAuth from "./GoogleAuth";
import { LIST_STREAMS } from "../Paths";

const Header = () => {
  return (
    <div className="NavBar">
      <div className="AppTitle">
        <Link to={LIST_STREAMS}>Stream Platform</Link>
      </div>
      <div>
        <Link to={LIST_STREAMS}>Streams</Link>
      </div>
      <GoogleAuth className="Login" />
    </div>
  );
};

export default Header;
