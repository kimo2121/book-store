import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Styles.css";
const Call = () => {
  return (
    <div className="navbar-call">
      <span className="whats-app">
        <FaIcons.FaPhoneAlt
          size={window.innerWidth < 768 && 22}
          className="icons"
        />
        01030365801 - واتس
      </span>
      <br />
      <span className="whats-app">
        <FaIcons.FaPhoneAlt
          size={window.innerWidth < 768 && 22}
          className="icons"
        />
        01014977934 - واتس
      </span>
    </div>
  );
};

export default Call;
