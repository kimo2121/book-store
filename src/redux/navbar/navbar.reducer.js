import NavbarActionTypes from "./navbar.types";
const INITIAL_STATE = {
  activeLink: "home",
};

const navbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavbarActionTypes.CHANGE_LINK:
      return {
        ...state,
        activeLink: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
