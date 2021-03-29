import CartActionTypes from "./cart.types";

export const addItem = (product) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: product,
});

export const removeItem = (product) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: product,
});

export const clearItemFromCart = (product) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: product,
});
export const completeOrder = () => ({
  type: CartActionTypes.COMPLETE_ORDER,
});
export const emptyCartTotally = () => ({
  type: CartActionTypes.EMPTY_CART_TOTALLY,
});
