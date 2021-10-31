import { LOCAL_STORAGE } from './constants';

export function redirectToLogin() {
  return window.location.replace('http://localhost:3000/');
}

export function logOut() {
  localStorage.removeItem(LOCAL_STORAGE.TOKEN_ACCESS);
  redirectToLogin();
}
