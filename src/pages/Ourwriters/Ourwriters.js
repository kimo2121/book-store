import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/Page-Header/PageHeader";
import "./Ourwriters.css";
import { countriesdata, WritersData } from "./WritersData";
import { FaFacebookF } from "react-icons/fa";
const Ourwriters = () => {
  const [writers, setWriter] = useState({
    chosenC: "egypt",
    countries: countriesdata,
  });
  const onClickFilter = (country) => {
    setWriter({ ...writers, chosenC: country });
    console.log(writers);
  };
  // const [navlink, setNavlink] = useState("home");
  // const onLinkHandler = (name) => {
  //   setNavlink(name);
  // };
  return (
    <div className="ourwriters-page">
      <PageHeader Children={"كتّاب الدار"} />
      <div className="countries-filter">
        {writers.countries.map((item, indx) => (
          <button
            onClick={() => onClickFilter(item.country)}
            className={writers.chosenC === item.country && "filter-btns-active"}
            key={indx}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="writers-intro">
        {WritersData.filter((item) => item.country === writers.chosenC).map(
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
