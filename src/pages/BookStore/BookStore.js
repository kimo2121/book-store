import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/Page-Header/PageHeader";
import { BooksData } from "./BooksData";
import * as FaIcons from "react-icons/fa";
import "./BookStore.css";
const BookStore = () => {
  return (
    <div className="book-store-page">
      <PageHeader Children="متجر الكتب" />
      <div className="book-store-component">
        <div className="books-container">
          {BooksData.map((item, indx) => (
            <div key={indx} className="each-book">
              <img src={item.img} alt="" />
              <div className="book-details">
                <Link to={window.location}>{item.name}</Link>
                <p>
                  <span className="book-old-price">{item?.oldprice}</span>{" "}
                  {item?.newprice}
                </p>
                <Link className="book-details-icon" to={window.location}>
                  <FaIcons.FaInfo size={15} />
                </Link>
                <Link className="book-details-icon" to={window.location}>
                  <FaIcons.FaShoppingCart size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookStore;
