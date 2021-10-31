import produce from 'immer';
import { getProducts, getStores, editProduct } from './actions';

export const initialState = {
  stores: {
    loading: false,
    loaded: false,
    error: null,
    data: null,
  },

  products: {
    loading: false,
    loaded: false,
    error: null,
    list: [],
  },

  productEdition: {
    loading: false,
    loaded: false,
    error: null,
  },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case getStores.REQUEST:
        draft.stores.loading = true;
        draft.stores.loaded = false;
        draft.stores.error = null;
        draft.stores.data = null;
        break;

      case getStores.SUCCESS:
        draft.stores.loading = false;
        draft.stores.loaded = true;
        draft.stores.error = null;
        draft.stores.data = payload;
        break;

      case getStores.FAILURE:
        draft.stores.loading = false;
        draft.stores.loaded = false;
        draft.stores.error = payload;
        draft.stores.data = null;
        break;

      case getProducts.REQUEST:
        draft.products.loading = true;
        draft.products.loaded = false;
        draft.products.error = null;
        draft.products.list = [];
        break;

      case getProducts.SUCCESS:
        draft.products.loading = false;
        draft.products.loaded = true;
        draft.products.error = null;
        draft.products.list = payload;
        break;

      case getProducts.FAILURE:
        draft.products.loading = false;
        draft.products.loaded = false;
        draft.products.error = payload;
        draft.products.list = [];
        break;

      case editProduct.REQUEST:
        draft.productEdition.loading = true;
        draft.productEdition.loaded = false;
        draft.productEdition.error = null;
        break;

      case editProduct.SUCCESS:
        draft.productEdition.loading = false;
        draft.productEdition.loaded = true;
        draft.productEdition.error = null;
        draft.products.list = draft.products.list.map(item => {
          return item.uuid === payload.uuid ? { ...payload } : item;
        });
        break;

      case editProduct.FAILURE:
        draft.productEdition.loading = false;
        draft.productEdition.loaded = false;
        draft.productEdition.error = payload;
        break;

      default:
        return draft;
    }
  });

export default reducer;
