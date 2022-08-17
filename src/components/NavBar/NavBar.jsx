import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import "./NavBar.css";

const NavBar = ({ navbarLinks }) => {
  const [menuClicked, setMenuCliked] = useState(false);

  const toggleMenuClick = () => {
    setMenuCliked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar__logo">Viajes!</span>
      {menuClicked ? (
        <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item) => {
          return (
            <li className="navbar__item" key={item.title}>
              <a className="navbar__link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
