import React from "react";
import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { emptyCartTotally } from "../../redux/cart/cart.actions";
const ShoppingCart = ({ total }) => {
  const cartitems = useSelector((state) => state.cart.cartItems);
  const emptyCart = useDispatch();
  return (
    <div className="shopping-cart-component">
      <div className="shopping-cart-header">عربة التسوق</div>
      <div
        className={
          !cartitems.length ? "cart-empty-from-items" : "hide-cart-elements"
        }
      >
        <p className='empty-tag'>عربة التسوق الخاصة بك فارغة</p>
        <p className="empty-cart keep-shopping">مواصلة التسوق</p>
      </div>
      <div className={cartitems ? "shopping-cart-body" : "hide-cart-elements"}>
        {cartitems.map((item, indx) => (
          <CartItem item={item} key={indx} />
        ))}
      </div>
      <div
        className={
          cartitems.length ? "shopping-cart-footer" : "hide-cart-elements"
        }
      >
        <div className="cart-footer-details">
          <p className="cart-total">
            المجموع:
            <br />
            <span>£{total}</span>
          </p>
          <p
            onClick={() => emptyCart(emptyCartTotally())}
            className="empty-cart"
          >
            إفراغ السلة
          </p>
        </div>
        <button className="make-purchase">إنشاء طلب</button>
        <p className="empty-cart keep-shopping">مواصلة التسوق</p>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(ShoppingCart));
