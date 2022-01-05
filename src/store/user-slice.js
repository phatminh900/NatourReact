import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_KEY_USER } from "../config/config";
import { cartSliceActions } from "./cart-slice";
import { LOCAL_KEY_EXPIRES_TIME } from "../config/config";

let timer;

const initialUser = {
  idToken: "",
  email: "",
  // name: "",
  isLogin: false,
  password: "",
  booked: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUser,
  reducers: {
    login(state, action) {
      state.idToken = action.payload.idToken;
      state.isLogin = Boolean(state.idToken);
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout() {
      return initialUser;
    },
    bookItem(state, action) {
      state.booked.push(...action.payload);
    },
  },
});

export const userSliceActions = userSlice.actions;
// login and store local storage
export const login = (user, expireTime) => {
  return (dispatch) => {
    dispatch(userSliceActions.login(user));

    localStorage.setItem(LOCAL_KEY_USER, JSON.stringify(user));

    //auto logout after 1h
    const timeToLogOut = Date.now() + expireTime * 1000;
    localStorage.setItem(LOCAL_KEY_EXPIRES_TIME, String(timeToLogOut));
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch(userSliceActions.logout());
    // remove item from cart
    dispatch(cartSliceActions.removeAllItemFromCart());
    localStorage.setItem(LOCAL_KEY_USER, JSON.stringify(initialUser));
    localStorage.removeItem(LOCAL_KEY_EXPIRES_TIME);
    // clear timeout run in background
    clearTimeout(timer);
  };
};
export const bookItem = (items) => {
  return (dispatch, getState) => {
    const currentState = getState().user;
    dispatch(userSliceActions.bookItem(items));
    const updateBooked = { ...currentState, booked:[...currentState.booked,...items] };

    localStorage.setItem(LOCAL_KEY_USER, JSON.stringify(updateBooked));
  };
};
export const getPreviousUser = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem(LOCAL_KEY_USER));
    if (!user?.idToken) return;

    const expiresTime = +localStorage.getItem(LOCAL_KEY_EXPIRES_TIME);
    const remainTime = expiresTime - Date.now();
    // small than 1min log out

    if (remainTime < 60000) {
      dispatch(logout());
      localStorage.removeItem(LOCAL_KEY_EXPIRES_TIME);
    }

    dispatch(userSliceActions.login(user));
  
    dispatch(userSliceActions.bookItem(user.booked))
    timer = setTimeout(() => {
      dispatch(logout());
    }, remainTime);
  };
};
export default userSlice.reducer;
