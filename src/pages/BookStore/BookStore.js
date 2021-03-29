import React from "react";

import PageHeader from "../../components/Page-Header/PageHeader";
import { BooksData } from "./BooksData";
import "./BookStore.css";
import BookCard from "../../components/BookCard/BookCard";
const BookStore = () => {
  return (
    <div className="book-store-page">
      <PageHeader Children="متجر الكتب" />
      <div className="book-store-component">
        <div className="books-container">
          {BooksData.map((item, indx) => (
            <BookCard key={indx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookStore;
