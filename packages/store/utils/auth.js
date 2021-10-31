import { LOCAL_STORAGE } from './constants';

export function redirectToLogin() {
  return window.location.assign('/login');
}

export function logOut() {
  localStorage.removeItem(LOCAL_STORAGE.TOKEN_ACCESS);
  localStorage.removeItem(LOCAL_STORAGE.TOKEN_REFRESH);
  localStorage.removeItem(LOCAL_STORAGE.TOKEN_EXPIRE_AT);
  localStorage.removeItem(LOCAL_STORAGE.CLOSE_SESSION_AT);
  redirectToLogin();
}

export function isTokenExpired(timeToExpired) {
  if (!timeToExpired) {
    logOut();
  }

  const seconds = 60;
  const milliseconds = 1000;
  const elapsedTime = (timeToExpired - new Date().getTime()) / seconds / milliseconds;

  return elapsedTime <= 0;
}
