import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 10,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
  },
});

export default CounterSlice;
export let { increment } = CounterSlice.actions;
