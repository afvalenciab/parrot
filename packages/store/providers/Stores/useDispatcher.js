import { useContext } from 'react';

import { getStoresRequest, getProductsRequest, editProductRequest } from 'utils/request/stores';
import { StoreContext } from 'providers/Stores';
import * as actions from './actions';

let storesDispatcher;

async function getStores() {
  try {
    storesDispatcher(actions.getStores.request());

    const { result } = await getStoresRequest();

    storesDispatcher(actions.getStores.success(result));
  } catch (error) {
    storesDispatcher(actions.getStores.failure(error));
  }
}

async function getProducts(payload) {
  try {
    storesDispatcher(actions.getProducts.request());

    const { results } = await getProductsRequest(payload);

    storesDispatcher(actions.getProducts.success(results));
  } catch (error) {
    storesDispatcher(actions.getProducts.failure(error));
  }
}

async function editProduct(payload) {
  try {
    storesDispatcher(actions.editProduct.request());

    await editProductRequest(payload);

    storesDispatcher(actions.editProduct.success(payload));
  } catch (error) {
    storesDispatcher(actions.editProduct.failure(error));
  }
}

export function useDispatcherStores() {
  const { dispatch } = useContext(StoreContext);
  storesDispatcher = dispatch;

  return {
    getStores,
    getProducts,
    editProduct,
  };
}
