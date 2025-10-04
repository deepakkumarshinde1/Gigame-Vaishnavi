import { getProductListWatcher } from "./product.saga";

import { all } from "redux-saga/effects";

export function* rootSaga() {
  let watchersList = [getProductListWatcher()];
  yield all(watchersList);
}
