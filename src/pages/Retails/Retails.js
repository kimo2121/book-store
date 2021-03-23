import React from "react";
import PageHeader from "../../components/Page-Header/PageHeader";
import { RetailsData } from "./Data";
import "./Retails.css";
const Retails = () => {
  return (
    <div className="retails-page">
      <PageHeader Children="منافذ التوزيع" />
      <div className="retails-details">
        {RetailsData.map((item, indx) => (
          <div key={indx} className="each-retail">
            <h2>{item.city}</h2>
            <p>{item.name}</p>
            <p>{item.address1}</p>
            <span>{item.phone1}</span>
            <p>{item?.address2}</p>
            <span>{item?.phone2}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Retails;
