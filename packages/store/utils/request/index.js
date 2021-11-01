import { LOCAL_STORAGE } from 'utils/constants';

export default function request(url, options = {}) {
  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.TOKEN_ACCESS)}`,
    },
    ...options,
  };

  if (options.body) {
    requestOptions.body = JSON.stringify({ ...options.body });
  }

  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
}
