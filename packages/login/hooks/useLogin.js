import { useState } from 'react';
import { LOCAL_STORAGE } from 'utils/constants';

export default function useLogin() {
  const [loginState, setLoginState] = useState({
    loading: false,
    error: null,
  });

  const fetchLogin = async ({ username, password }) => {
    try {
      setLoginState({ ...loginState, loading: true });

      const response = await fetch('http://api-staging.parrot.rest/api/auth/token', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      const { errors } = data;

      if (errors) {
        setLoginState({ loading: false, error: errors[0]?.message });
        return;
      }

      localStorage.setItem(LOCAL_STORAGE.TOKEN_ACCESS, data.access);
      localStorage.setItem(LOCAL_STORAGE.TOKEN_REFRESH, data.refresh);

      window.location.assign('http://localhost:3000/');

      setLoginState({ loading: false, error: null });
    } catch (error) {
      setLoginState({ loading: false, error: error.message });
    }
  };

  return [loginState, fetchLogin];
}
