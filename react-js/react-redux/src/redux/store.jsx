import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";
import CartSlice from "./cart.slice";

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    myCart: CartSlice.reducer,
  },
});

export default store;
