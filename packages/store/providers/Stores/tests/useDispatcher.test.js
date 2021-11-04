/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { getStoresRequest, getProductsRequest, editProductRequest } from 'utils/request/stores';
import useDispatcherStores from 'providers/Stores/useDispatcher';
import * as actions from 'providers/Stores/actions';

jest.mock('utils/request/stores');

/*
NOTE: other way to mock the react-redux

import { useDispatch } from 'react-redux';
jest.mock('react-redux');
useDispatch.mockImplementation(() => dispatch);
*/

describe('useDispatcherStores', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => dispatch);

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

    it('Should call the dispatch function with the action getStore', async () => {
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(actions.getStores());
    });
  });

  describe('getProducts', () => {
    function Component() {
      const { getProducts } = useDispatcherStores();
      getProducts({ payload: '123' });
      return null;
    }

    it('Should call the dispatch function with the action getProducts', async () => {
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(actions.getProducts({ payload: '123' }));
    });
  });

  describe('editProduct', () => {
    function Component() {
      const { editProduct } = useDispatcherStores();
      editProduct({ uuid: '123' });
      return null;
    }

    it('Should call the dispatch function with the action editProduct', async () => {
      await render(<Component />);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(actions.editProduct({ uuid: '123' }));
    });
  });
});
