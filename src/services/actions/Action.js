import { INCREMENT, DECREMENT, SETUSER, LOGOUT } from "../constants";

export const setIncrement = () => {
  return (dispath) => {
    dispath({
      type: INCREMENT,
    });
  };
};

export const setDecrement = () => {
  return (dispath) => {
    dispath({
      type: DECREMENT,
    });
  };
};

export const setUser = (userObj) => {
  return (dispath) => {
    dispath({
      type: SETUSER,
      payLoad: userObj,
    });
  };
};

export const setLogOut = () => {
  return (dispath) => {
    dispath({
      type: LOGOUT,
    });
  };
};
