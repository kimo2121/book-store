import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/Page-Header/PageHeader";
import "./Ourwriters.css";
import { countriesdata, WritersData } from "./WritersData";
import { FaFacebookF } from "react-icons/fa";
const Ourwriters = () => {
  const onClickFilter= ()=>{
    
  }
  return (
    <div className="ourwriters-page">
      <PageHeader Children={"كتّاب الدار"} />
      <div className="countries-filter">
        {countriesdata.map((item, indx) => (
          <button className="filter-btns" key={indx}>
            {item}
          </button>
        ))}
      </div>
      <div className="writers-intro">
        {WritersData.filter((item) => item.country === "egypt").map(
          (item, indx) => (
            <div key={indx} className="each-writer-intro">
              <div className="image-circle">
                <img className="image" src={item.img} alt="" />
              </div>
              <p>{item.name}</p>
              <div className="divider2"></div>
              <span>{item.books}</span>
              <Link to={item.facebook}>
                <FaFacebookF size={28} />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Ourwriters;
