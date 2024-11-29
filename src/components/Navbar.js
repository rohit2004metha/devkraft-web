import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/devkraft-logo.png";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const handleToggle = () => setNavToggle(!navToggle);
  return (
    <nav>
      <div className="nav-container">
        <NavLink
          exact
          to="/"
          className="nav-logo"
          onClick={() => setNavToggle(false)}
        >
          <img src={logo} alt="Team Devkraft" className="logo" />
        </NavLink>
        <ul className={"nav-menu" + (navToggle ? " active" : "")}>
          <li className="nav-item">
            <NavLink onClick={handleToggle} exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              onClick={handleToggle}
              exact
              to="/about"
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              onClick={handleToggle}
              exact
              to="/team"
              className="nav-link"
            >
              Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              onClick={handleToggle}
              exact
              to="/discord"
              className="nav-link"
            >
              Discord
            </NavLink>
          </li>
          <li className="nav-item last-item">
            <NavLink
              onClick={handleToggle}
              exact
              to="/contact"
              className="nav-link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleToggle}>
          {navToggle ? <FaTimes /> : <FaBars />}
          {/* {navToggle ? <FiX /> : <FiMenu />} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
