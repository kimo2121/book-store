import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { iconsdata, linksdata } from "./Data";
import SliderMenu from "../SliderMenu/SliderMenu";
import { changeLink } from "../../redux/navbar/navbar.actions";
import { useDispatch, useSelector } from "react-redux";
import NavBurgerMenu from "./NavBurgerMenu";

const Navbar = () => {
  const changeLinkDispatcher = useDispatch();
  const activeLink = useSelector((state) => state.navbar.activeLink);

  return (
    <div className="nav-bar">
        <NavBurgerMenu className="burger-menu-component" />
      <div className="nav-bar-links">
        {linksdata.map((item, indx) => (
          <Link
            className={activeLink === item.name && "active-link"}
            onClick={() => changeLinkDispatcher(changeLink(item.name))}
            key={indx}
            to={item.to}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="drop-down-more">
        <span>المزيد ⏷</span>
        <div className="dropdown-content">
          {linksdata.slice(3, 8).map((item, indx) => (
            <Link
              className={activeLink === item.name && "dropmenu-active-link"}
              id={item.name}
              onClick={() => changeLinkDispatcher(changeLink(item.name))}
              key={indx}
              to={item.to}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="nav-bar-icons">
        {iconsdata.map((item, indx) => (
          <span key={indx} to="/">
            <SliderMenu item={item} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
