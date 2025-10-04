import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    list: [],
    loading: false,
    error: false,
  },
  reducers: {
    saveProductList(state, action) {
      state.error = false;
      state.loading = false;
      state.list = action.payload;
    },
    getProductList(state) {
      state.loading = true;
      state.list = [];
    },
    setProductError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default ProductSlice;
export const { saveProductList, setProductError, getProductList } =
  ProductSlice.actions;
