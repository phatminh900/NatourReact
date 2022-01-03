import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  tours: [],
  products: [],
};
const checkExistItem = (list, action) => {
  return list.some((item) => item.id === action.payload.id);
};
const removeItem = (list, action) => {
  const productItemIdex = list.findIndex(
    (product) => product.id === action.payload.id
  );
  list.splice(productItemIdex, 1);
};
const CartSlice = createSlice({
  name: "carts",
  initialState: initialCart,
  reducers: {
    addTourToCart(state, action) {
      const isAlreayHaveTour = checkExistItem(state.tours, action);
      if (isAlreayHaveTour)  return state  ;
      if (!isAlreayHaveTour) state.tours.push(action.payload);
    },
    addProductToCart(state, action) {
      const findItemAlreadyBoughtIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (findItemAlreadyBoughtIndex !== -1)
        state.products[findItemAlreadyBoughtIndex].quantity =
          state.products[findItemAlreadyBoughtIndex].quantity + 1;
      if (findItemAlreadyBoughtIndex === -1)
        state.products.push(action.payload);
    },
    increaseProductFromCart(state, action) {
      const productItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      productItem.quantity = productItem.quantity + 1;
    },
    decreaseProductFromCart(state, action) {
      console.log(action);
      const productItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      productItem.quantity = productItem.quantity - 1;
      if (productItem.quantity === 0) removeItem(state.products, action);
    },
    removeTourFromCart(state, action) {
      removeItem(state.tours, action);
    },
    removeItemFromCart(state, action) {
      removeItem(state.products, action);
    },
    removeAllItemFromCart(state, action) {
      state.products.length = 0;
      state.tours.length = 0;
    },
  },
});
export const cartSliceActions = CartSlice.actions;
export default CartSlice.reducer;
