import { getStores, getProducts, editProduct } from '../actions';

import reducer from '../reducer';

describe('reducer', () => {
  let state;

  beforeEach(() => {
    state = {
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
        list: [{ uuid: '123' }],
      },

      productEdition: {
        loading: false,
        loaded: false,
        error: null,
      },
    };
  });

  it('Should return the initial state', () => {
    expect(reducer(state, {})).toEqual(state);
  });

  describe('getStores action', () => {
    it('Should return the action getStores.request() correctly', () => {
      const expectResult = {
        ...state,
        stores: {
          ...state.stores,
          loading: true,
        },
      };

      expect(reducer(state, getStores.request())).toEqual(expectResult);
    });

    it('Should return the action getStores.success() correctly', () => {
      const expectResult = {
        ...state,
        stores: {
          ...state.stores,
          loaded: true,
          data: { name: 'Store 1' },
        },
      };

      expect(reducer(state, getStores.success({ name: 'Store 1' }))).toEqual(expectResult);
    });

    it('Should return the action getStores.failure() correctly', () => {
      const expectResult = {
        ...state,
        stores: {
          ...state.stores,
          error: 'error',
        },
      };

      expect(reducer(state, getStores.failure('error'))).toEqual(expectResult);
    });
  });

  describe('getProducts action', () => {
    it('Should return the action getProducts.request() correctly', () => {
      const expectResult = {
        ...state,
        products: {
          ...state.products,
          loading: true,
          list: [],
        },
      };

      expect(reducer(state, getProducts.request())).toEqual(expectResult);
    });

    it('Should return the action getProducts.success() correctly', () => {
      const expectResult = {
        ...state,
        products: {
          ...state.products,
          loaded: true,
          list: [{ uuid: '123' }],
        },
      };

      expect(reducer(state, getProducts.success([{ uuid: '123' }]))).toEqual(expectResult);
    });

    it('Should return the action getProducts.failure() correctly', () => {
      const expectResult = {
        ...state,
        products: {
          ...state.products,
          error: 'error',
          list: [],
        },
      };

      expect(reducer(state, getProducts.failure('error'))).toEqual(expectResult);
    });
  });

  describe('editProduct action', () => {
    it('Should return the action editProduct.request() correctly', () => {
      const expectResult = {
        ...state,
        productEdition: {
          ...state.productEdition,
          loading: true,
        },
      };

      expect(reducer(state, editProduct.request())).toEqual(expectResult);
    });

    it('Should return the action editProduct.success() correctly', () => {
      const expectResult = {
        ...state,
        productEdition: {
          ...state.productEdition,
          loaded: true,
        },
      };

      expect(reducer(state, editProduct.success({ uuid: '123' }))).toEqual(expectResult);
    });

    it('Should return the action editProduct.failure() correctly', () => {
      const expectResult = {
        ...state,
        productEdition: {
          ...state.productEdition,
          error: 'error',
        },
      };

      expect(reducer(state, editProduct.failure('error'))).toEqual(expectResult);
    });
  });
});
