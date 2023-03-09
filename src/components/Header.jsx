import React from "react";
import logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-14 bg-light py-4 drop-shadow-md">
      <Link to="/">
        <img className="h-full" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Header;
