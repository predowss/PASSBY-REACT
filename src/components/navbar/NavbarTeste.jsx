import React, { useState } from "react";
import "../navbar/navbar.css";

function Navbar(props) {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        PASSBY
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link">
            Skills
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
