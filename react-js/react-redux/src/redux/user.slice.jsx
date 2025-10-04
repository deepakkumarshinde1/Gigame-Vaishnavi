import { createSlice } from "@reduxjs/toolkit";

let UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    newUser: null,
  },
  reducers: {
    getUserDetails(state, action) {
      state.newUser = action.payload;
    },
  },
});

export default UserSlice;
export const { getUserDetails } = UserSlice.actions;

// Thunk and Saga
