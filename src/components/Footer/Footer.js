import React from "react";
import { Link } from "react-router-dom";
import { linksdata } from "../Navbar/Data";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-right">
        <h3>almaktaba</h3>
        <span>حقوق النشر © 2021 جميع الحقوق محفوظة</span>
      </div>
      <div className="footer-left">
        {linksdata.map((item, indx) => (
          <Link to={item.to}>{item.text}</Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
