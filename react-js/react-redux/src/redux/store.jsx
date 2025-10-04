import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";
import CartSlice from "./cart.slice";
import UserSlice from "./user.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import ProductSlice from "./products.slice";

let sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    myCart: CartSlice.reducer,
    users: UserSlice.reducer,
    products: ProductSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
