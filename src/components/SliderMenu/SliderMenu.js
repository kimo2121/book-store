import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
import "./SliderMenu.css";
import { IconContext } from "react-icons";
import { iconsdata } from "../Navbar/Data";

function SliderMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaMapMarkerAlt
              className="bars-icon"
              onClick={showSidebar}
            />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div onClick={showSidebar} to="#" className="menu-x">
            <AiIcons.AiOutlineClose className="x-icon" size="35" />
          </div>
          <div className="slider-menu-content">
            <Link className='slider-menu-address' to="#">برادة، العمرانية الشرقية، قسم العمرانية، مصر</Link>
            <span>(بجوار التوحيد والنور ومدرسة التربية الحديثة للغات)</span>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SliderMenu;
