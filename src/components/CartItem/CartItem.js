import React from "react";
import * as AiIcons from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";
import "./CartItem.css";
const CartItem = ({ item }) => {
  const clearItem = useDispatch();
  const remove = useDispatch();
  const add = useDispatch();
  return (
    <div className="cart-item-component">
      <div className="each-cart-item">
        <img src={item.img} alt="" />
        <div className="cart-item-details">
          <p>{item.name}</p>
          <span>£{item.newprice}</span>
          <div className="add-remove-item">
            <button
              className="remove-btn"
              disabled={item.quantity <= 1 ? true : false}
              onClick={() => remove(removeItem(item))}
            >
              -
            </button>
            <span className="item-quantity">{item.quantity}</span>
            <button className="add-btn" onClick={() => add(addItem(item))}>
              &#43;
            </button>
          </div>
        </div>
        <span>
          <AiIcons.AiOutlineClose
            onClick={() => clearItem(clearItemFromCart(item))}
            className="cart-item-x-icon"
            size="17"
          />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
