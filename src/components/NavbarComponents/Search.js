import React from "react";
import * as FaIcons from "react-icons/fa";

const Search = () => {
  return (
    <div className="slider-menu-content">
      <div className="search">
        <input type="text" placeholder="اكتب طلبك" />
        <div className="search-icon">
          <FaIcons.FaSearch size="20" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Search;
