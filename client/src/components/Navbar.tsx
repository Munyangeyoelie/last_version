"use client ";
import React, { useState } from "react";
const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar, unclicked");
  const [menu_class, setMenuClass] = useState("menu-hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <div className="w-100% h-100vh ">
      <nav>
        <div className="burger-menu">
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}></div>
    </div>
  );
};

export default Navbar;
