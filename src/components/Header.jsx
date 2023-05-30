import React from "react";
import logo from "../assets/logo.svg";
import PersonIcon from "@mui/icons-material/Person";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-14 bg-light p-4 drop-shadow-md flex justify-between">
      <NavLink to="/">
        <img className="h-full" src={logo} alt="" />
      </NavLink>
      <nav>
        <ul className="list-none">
          <li>
            <NavLink to="/login" className="text-black"> 
              <PersonIcon className="mx-3" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
