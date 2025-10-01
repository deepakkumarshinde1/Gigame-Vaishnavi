import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: [],
  },
});

export default CartSlice;
