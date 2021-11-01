import request from 'utils/request';

const BASE_URL = 'https://api-staging.parrot.rest/api';

export function refreshTokenRequest(refreshToken) {
  return request(`${BASE_URL}/auth/token/refresh`, {
    method: 'POST',
    body: { refresh: refreshToken },
  });
}
