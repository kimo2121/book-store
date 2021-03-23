import React from "react";
import "./PageHeader.css";
const PageHeader = ({ Children }) => {
  return (
    <div>
      <div className="header-intro">
        <p>{Children}</p>
        <div className="divider1"></div>
      </div>
    </div>
  );
};

export default PageHeader;
