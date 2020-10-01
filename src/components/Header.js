/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import { Link } from "gatsby";
import { AppContext } from "~context/AppContext";

import Arrow from "~components/svg/Arrow";

const Header = () => {
  const { menuActive, setMenuActive } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      className={`header ${
        menuActive ? ` menu-active` : ``
      } transition-transform w-full fixed top-0 right-0 left-0 z-30 py-3`}
    >
      <nav className="grid">
        <div className="grid-end-12 flex items-center justify-between">
          <Link className="header__menu animation-appear-right" to="/">
            <Arrow className="header__arrow" direction="<" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
