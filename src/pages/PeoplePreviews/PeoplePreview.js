import React from "react";
import PageHeader from "../../components/Page-Header/PageHeader";
import { Previews } from "./Data";
import "./PeoplePreview.css";
const PeoplePreview = () => {
  return (
    <div className="peoplepreview-page">
      <PageHeader Children="قالوا عنا" />
      <div className="people-preview">
        {Previews.map((item, indx) => (
          <div key={indx} className="each-preview">
            <span>
              <strong>{item.name}:</strong> {item.job}
            </span>
            <br />
            {item.opinion}
            <br />
            <div className="image-frame">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePreview;
