import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import "./BookCard.css";
const BookCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="each-book">
        <img src={item.img} alt="" />
        <div className="book-details">
          <Link to={window.location}>{item.name}</Link>
          <p>
            <span className="book-old-price">£{item?.oldprice}</span> £
            {item?.newprice}
          </p>
          <Link className="book-details-icon" to={window.location}>
            <FaIcons.FaInfo size={15} />
          </Link>
          <Link
            onClick={() => dispatch(addItem(item))}
            className="book-details-icon"
            to={window.location}
          >
            <FaIcons.FaShoppingCart size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
