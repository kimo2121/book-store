import React from "react";
import { Link } from "react-router-dom";
import { linksdata } from "../Navbar/Data";
import { changeLink } from "../../redux/navbar/navbar.actions";
import { useDispatch, useSelector } from "react-redux";
import "./FooterNav.css";

const FooterNav = () => {
    const changeLinkDispatcher = useDispatch();
    const activeLink = useSelector((state) => state.navbar.activeLink);
  
  return (
    <div className="footer-left">
      <div className="footer-links">
        {linksdata.map((item, indx) => (
          <Link
            className={activeLink === item.name && "footer-active-link"}
            onClick={() => changeLinkDispatcher(changeLink(item.name))}
            key={indx}
            to={item.to}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="footer-drop-down-more">
        <span>المزيد ⏶</span>
        <div className="footer-dropdown-content">
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
    </div>
  );
};

export default FooterNav;
