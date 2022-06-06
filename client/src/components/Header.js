import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">Streamy</Link>
      </div>
      <div>
        <Link to="/">All streams</Link>
      </div>
    </div>
  );
};

export default Header;
