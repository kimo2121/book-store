import React, { useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import "../SliderMenu/SliderMenu.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { iconsdata, linksdata } from "./Data";
import { changeLink } from "../../redux/navbar/navbar.actions";
import { useDispatch, useSelector } from "react-redux";

import { IconContext } from "react-icons";
import Layer2BurgerNav from "./Layer2BurgerNav";

function NavBurgerMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const changeLinkDispatcher = useDispatch();
  const activeLink = useSelector((state) => state.navbar.activeLink);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        <div className="burger-menu-component">
          <div className="navbar">
            <span className="slider-menu-icon" onClick={showSidebar}>
              <FiIcons.FiMenu className="burger-icon" color="white" size={25} />
            </span>
          </div>
          <nav className={sidebar ? "burger-menu active" : "burger-menu"}>
            <div onClick={showSidebar} to="#" className="menu-x">
              <AiIcons.AiOutlineClose
                className="x-icon burger-menu-x-icon"
                size="35"
              />
            </div>
            <div className="burger-nav-links">
              {linksdata.map((item, indx) => (
                <Link
                  className={activeLink === item.name && "active-burger-link"}
                  onClick={() => {
                    changeLinkDispatcher(changeLink(item.name));
                    showSidebar();
                  }}
                  key={indx}
                  to={item.to}
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="burger-nav-divider" />
            <div className="burger-nav-icons">
              {iconsdata
                .filter((item => item.name != "shoppingcart"))
                .map((item, indx) => (
                  <Layer2BurgerNav key={indx} item={item} />
                ))}
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBurgerMenu;
