import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import * as HiIcons from "react-icons/hi";
import { iconsdata, linksdata } from "./Data";
import SliderMenu from "../SliderMenu/SliderMenu";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-links">
        {linksdata.map((item, indx) => (
          <Link key={indx} to={item.to}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className="nav-bar-icons">
        {iconsdata.map((item, indx) => (
          <span key={indx} to="/">
            {item}
          </span>
        ))}
        <SliderMenu />
      </div>
    </div>
  );
};

export default Navbar;
