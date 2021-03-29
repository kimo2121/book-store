import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "../SliderMenu/SliderMenu.css";
import { IconContext } from "react-icons";
import Call from "../NavbarComponents/Call";
import Directions from "../NavbarComponents/Directions";
import Share from "../NavbarComponents/Share";
import Search from "../NavbarComponents/Search";
import SliderContact from "../SliderContact/SliderContact";

function Layer2BurgerNav({ item }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        <div className="layer2-burger-nav-icons">
          <span className="layer2-burger-icon" onClick={showSidebar}>
            {item.icon}
          </span>
        </div>
        <nav>
          <div className="slider-menu-content">
            <nav className={sidebar ? "slider-menu active" : "slider-menu"}>
              <div onClick={showSidebar} to="#" className="menu-x">
                <AiIcons.AiOutlineClose className="x-icon" size="35" />
              </div>
              <div className="slider-menu-content">
                {item.name === "share" ? (
                  <Share />
                ) : item.name === "call" ? (
                  <Call />
                ) : item.name === "directions" ? (
                  <Directions />
                ) : item.name === "search" ? (
                  <Search />
                ) : (
                  <SliderContact />
                )}
              </div>
            </nav>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Layer2BurgerNav;
