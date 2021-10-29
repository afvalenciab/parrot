import { useState } from 'react';

export default function useLogin() {
  const [loginState, setLoginState] = useState({
    loading: false,
    loaded: false,
    error: null,
    data: null,
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
        setLoginState({ loading: false, loaded: false, data: null, error: errors[0]?.message });
        return;
      }

      setLoginState({ loading: false, loaded: true, error: null, data });
    } catch (error) {
      setLoginState({ loading: false, loaded: false, data: null, error: error.message });
    }
  };

  return [loginState, fetchLogin];
}
