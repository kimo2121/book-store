import NavbarActionTypes from "./navbar.types";
 export const changeLink =(name) => ({
    type: NavbarActionTypes.CHANGE_LINK,
    payload: name,
  });