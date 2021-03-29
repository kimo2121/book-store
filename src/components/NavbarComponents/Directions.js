import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import "./Styles.css";
const Directions = () => {
  return (
    <div className="navbar-directions">
      <span className="directions-address">
        <FaIcons.FaMapMarkerAlt color="white" size={window.innerWidth < 768 && 25} className="icons" />
        برادة، العمرانية الشرقية، قسم العمرانية، مصر
      </span>
      <br />
      <span className="directions-address-2">
        (بجوار التوحيد والنور ومدرسة التربية الحديثة للغات)
      </span>
      <div className="directions-icons">
        <SiIcons.SiGooglestreetview size={38} />
      </div>
    </div>
  );
};

export default Directions;
