/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

import { getStoresRequest, getProductsRequest, editProductRequest } from 'utils/request/stores';
import { useDispatcherStores } from 'providers/Stores/useDispatcher';
import * as actions from 'providers/Stores/actions';

jest.mock('utils/request/stores');

describe('useDispatcherStores', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    jest.spyOn(React, 'useContext').mockImplementation(() => ({ dispatch }));

    getStoresRequest.mockImplementation(() => ({
      result: { uuid: '123', username: 'parrot', stores: [{ uuid: '456', name: 'Store 1' }] },
    }));
    getProductsRequest.mockImplementation(() => ({
      results: [{ uuid: '123', name: 'Combo1', category: { uuid: '999', name: 'Especiales' } }],
    }));
    editProductRequest.mockImplementation(() => jest.fn());
  });

  describe('getStores', () => {
    function Component() {
      const { getStores } = useDispatcherStores();
      getStores();
      return null;
    }

    it('Should complete successfully the getStores flow', async () => {
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(actions.getStores.request());
      expect(getStoresRequest).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(
        actions.getStores.success({
          uuid: '123',
          username: 'parrot',
          stores: [{ uuid: '456', name: 'Store 1' }],
        }),
      );
    });

    it('Should complete in a wrong way the getStores flow', async () => {
      // eslint-disable-next-line prefer-promise-reject-errors
      getStoresRequest.mockImplementation(() => Promise.reject('error'));
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(actions.getStores.request());
      expect(getStoresRequest).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(actions.getStores.failure('error'));
    });
  });

  describe('getProducts', () => {
    function Component() {
      const { getProducts } = useDispatcherStores();
      getProducts();
      return null;
    }

    it('Should complete successfully the getProducts flow', async () => {
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(actions.getProducts.request());
      expect(getProductsRequest).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(
        actions.getProducts.success([
          { uuid: '123', name: 'Combo1', category: { uuid: '999', name: 'Especiales' } },
        ]),
      );
    });

    it('Should complete in a wrong way the getProducts flow', async () => {
      // eslint-disable-next-line prefer-promise-reject-errors
      getProductsRequest.mockImplementation(() => Promise.reject('error'));
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(actions.getProducts.request());
      expect(getProductsRequest).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(actions.getProducts.failure('error'));
    });
  });

  describe('editProduct', () => {
    function Component() {
      const { editProduct } = useDispatcherStores();
      editProduct({ uuid: '123' });
      return null;
    }

    it('Should complete successfully the editProduct flow', async () => {
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(actions.editProduct.request());
      expect(editProductRequest).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(actions.editProduct.success({ uuid: '123' }));
    });

    it('Should complete in a wrong way the editProduct flow', async () => {
      // eslint-disable-next-line prefer-promise-reject-errors
      editProductRequest.mockImplementation(() => Promise.reject('error'));
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(actions.editProduct.request());
      expect(editProductRequest).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(actions.editProduct.failure('error'));
    });
  });
});
