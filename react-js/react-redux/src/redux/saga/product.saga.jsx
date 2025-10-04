import { call, put, takeLatest } from "redux-saga/effects";
import {
  getProductList,
  saveProductList,
  setProductError,
} from "../products.slice";

// api
function getProductListService() {
  let url = `https://fakestoreapi.com/products`;
  return fetch(url);
}
// handler
// action => react app to server
function* getProductListHandler(action) {
  let { payload } = action;
  try {
    let response = yield call(getProductListService);
    let data = yield response.json();
    yield put(saveProductList(data)); // save data to redux
  } catch (error) {
    // error redux
    yield put(
      setProductError({
        code: 401,
        message: "Token Expire",
      })
    );
  }
}

// watcher
export function* getProductListWatcher() {
  yield takeLatest(getProductList.type, getProductListHandler);
}
