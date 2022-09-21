import { INCREMENT, DECREMENT, SETUSER, LOGOUT } from "../constants";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case SETUSER:
      return {
        ...state,
        user: action.payLoad,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user:"",
        loggedIn: false,
      };
    default:
      return state;
  }
};
