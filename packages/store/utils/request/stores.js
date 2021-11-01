import request from './index';

export const BASE_URL = 'https://api-staging.parrot.rest/api';

export function getStoresRequest() {
  return request(`${BASE_URL}/v1/users/me`, {
    method: 'GET',
  });
}

export function getProductsRequest({ storeId }) {
  return request(`${BASE_URL}/v1/products/?store=${storeId}`, {
    method: 'GET',
  });
}

export function editProductRequest({ uuid: productId, availability }) {
  return request(`${BASE_URL}/v1/products/${productId}/availability`, {
    method: 'PUT',
    body: { availability },
  });
}
