import { createSlice } from "@reduxjs/toolkit";

const initialProducts = {
  products: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    getProducts(state, action) {
      state.products.push(...action.payload);
    },
  },
});
export const productsSliceActions = ProductsSlice.actions;
export default ProductsSlice.reducer;
