import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./SliderMenu.css";
import { IconContext } from "react-icons";
import Call from "../NavbarComponents/Call";
import Directions from "../NavbarComponents/Directions";
import Share from "../NavbarComponents/Share";
import Search from "../NavbarComponents/Search";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SliderContact from "../SliderContact/SliderContact";
function SliderMenu({ item }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        <div className="slider-navbar">
          <span className="slider-menu-icon" onClick={showSidebar}>
            {item.icon}
          </span>
        </div>
        {item.name === "shoppingcart" ? (
          <nav
            className={
              sidebar ? "slider-shoppingcart opened" : "slider-shoppingcart"
            }
          >
            <div onClick={showSidebar} className="menu-x">
              <AiIcons.AiOutlineClose
                className={
                  item.name === "shoppingcart"
                    ? "x-icon x-shoppingcart"
                    : "x-icon"
                }
                size={item.name === "shoppingcart" ? "24" : "35"}
              />
            </div>
            <div className="slider-menu-content">
              {item.name === "shoppingcart" && <ShoppingCart />}
            </div>
          </nav>
        ) : (
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
        )}
      </IconContext.Provider>
    </>
  );
}

export default SliderMenu;
