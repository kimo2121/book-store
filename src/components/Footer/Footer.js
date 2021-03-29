import React from "react";
import "./Footer.css";
import FooterNav from "../FooterNav/FooterNav";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-right">
        <h3>almaktaba</h3>
        <span>حقوق النشر © 2021 جميع الحقوق محفوظة</span>
      </div>
      <FooterNav />
    </div>
  );
};

export default Footer;
