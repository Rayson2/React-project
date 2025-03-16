import React from "react";
import logo from "../../assets/image/logo.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <nav>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>

        <ul className="NavOptions">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
