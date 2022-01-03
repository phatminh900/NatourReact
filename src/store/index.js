import { configureStore } from "@reduxjs/toolkit";
import toursSlice from "./tours-slice";
import userSlice from "./user-slice";
import productsSlice from "./products-slice";
import CartSlice from "./Cart-slice";
const store = configureStore({
  reducer: {
    tours: toursSlice,
    user: userSlice,
    products: productsSlice,
    cart: CartSlice,
  },
});
export default store;
