import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.module";

const Header = () => (
  <div className="container">
    <div className="container__header">
      <button className="container__button-link">
        <NavLink to="/create-add">add(+)</NavLink>
      </button>
    </div>
  </div>
);

export default Header;
