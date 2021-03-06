import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "../cart/cart.utils";
const INITIAL_STATE = {
  cartItems: [],
  orderdItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.COMPLETE_ORDER:
      return {
        ...state,
        orderdItems: [...state.orderdItems, state.cartItems],
        cartItems: [],
      };
    case CartActionTypes.EMPTY_CART_TOTALLY:
      return { ...state, cartItems: [] };
  }
};
export default cartReducer;
