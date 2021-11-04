import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from 'providers/Stores/actions';
import { getStoresRequest, getProductsRequest, editProductRequest } from 'utils/request/stores';

import storeSagas, { getStores, getProducts, editProduct } from 'providers/Stores/sagas';

describe('Store Sagas', () => {
  const mainGenerator = storeSagas();

  it('Should return the getStore.TRIGGER action when storeSagas is called the first time', () => {
    expect(mainGenerator.next().value).toEqual(takeLatest(actions.getStores.TRIGGER, getStores));
  });

  it('Should return the getProducts.TRIGGER action when storeSagas is called the second time', () => {
    expect(mainGenerator.next().value).toEqual(
      takeLatest(actions.getProducts.TRIGGER, getProducts),
    );
  });

  it('Should return the editProduct.TRIGGER action when storeSagas is called the third time', () => {
    expect(mainGenerator.next().value).toEqual(
      takeLatest(actions.editProduct.TRIGGER, editProduct),
    );
  });

  describe('getStore saga', () => {
    it('Should complete successfully the getStore Saga', () => {
      const generator = getStores();
      const result = { storeId: '123' };

      expect(generator.next().value).toEqual(put(actions.getStores.request()));
      expect(generator.next().value).toEqual(call(getStoresRequest));
      const nextResult = generator.next({ result });
      expect(nextResult.value).toEqual(put(actions.getStores.success(result)));
      expect(generator.next().done).toEqual(true);
    });

    it('Should failure the getStore Saga', () => {
      const generator = getStores();

      expect(generator.next().value).toEqual(put(actions.getStores.request()));
      expect(generator.next().value).toEqual(call(getStoresRequest));
      const nextResult = generator.throw('error');
      expect(nextResult.value).toEqual(put(actions.getStores.failure('error')));
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('getProducts saga', () => {
    it('Should complete successfully the getProducts Saga', () => {
      const generator = getProducts({ payload: { productId: '123' } });
      const results = { productId: '123' };

      expect(generator.next().value).toEqual(put(actions.getProducts.request()));
      expect(generator.next().value).toEqual(call(getProductsRequest, { productId: '123' }));
      const nextResult = generator.next({ results });
      expect(nextResult.value).toEqual(put(actions.getProducts.success(results)));
      expect(generator.next().done).toEqual(true);
    });

    it('Should failure the getProducts Saga', () => {
      const generator = getProducts({ payload: { productId: '123' } });

      expect(generator.next().value).toEqual(put(actions.getProducts.request()));
      expect(generator.next().value).toEqual(call(getProductsRequest, { productId: '123' }));
      const nextResult = generator.throw('error');
      expect(nextResult.value).toEqual(put(actions.getProducts.failure('error')));
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('editProduct saga', () => {
    it('Should complete successfully the editProduct Saga', () => {
      const generator = editProduct({ payload: { productId: '12' } });

      expect(generator.next().value).toEqual(put(actions.editProduct.request()));
      expect(generator.next().value).toEqual(call(editProductRequest, { productId: '12' }));
      expect(generator.next().value).toEqual(put(actions.editProduct.success({ productId: '12' })));
      expect(generator.next().done).toEqual(true);
    });

    it('Should failure the editProduct Saga', () => {
      const generator = editProduct({ payload: { productId: '12' } });

      expect(generator.next().value).toEqual(put(actions.editProduct.request()));
      expect(generator.next().value).toEqual(call(editProductRequest, { productId: '12' }));
      const nextResult = generator.throw('error');
      expect(nextResult.value).toEqual(put(actions.editProduct.failure('error')));
      expect(generator.next().done).toEqual(true);
    });
  });
});
