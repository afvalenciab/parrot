import { takeLatest, put, call } from 'redux-saga/effects';

import { getStoresRequest, getProductsRequest, editProductRequest } from 'utils/request/stores';
import * as actions from './actions';

export function* getStores() {
  try {
    yield put(actions.getStores.request());

    const { result } = yield call(getStoresRequest);

    yield put(actions.getStores.success(result));
  } catch (error) {
    yield put(actions.getStores.failure(error));
  }
}

export function* getProducts({ payload }) {
  try {
    yield put(actions.getProducts.request());

    const { results } = yield call(getProductsRequest, payload);

    yield put(actions.getProducts.success(results));
  } catch (error) {
    yield put(actions.getProducts.failure(error));
  }
}

export function* editProduct({ payload }) {
  try {
    yield put(actions.editProduct.request());

    yield call(editProductRequest, payload);

    yield put(actions.editProduct.success(payload));
  } catch (error) {
    yield put(actions.editProduct.failure(error));
  }
}

export default function* storeSagas() {
  yield takeLatest(actions.getStores.TRIGGER, getStores);
  yield takeLatest(actions.getProducts.TRIGGER, getProducts);
  yield takeLatest(actions.editProduct.TRIGGER, editProduct);
}
