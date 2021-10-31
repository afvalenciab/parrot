import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LOCAL_STORAGE } from 'utils/constants';
import { redirectToLogin } from 'utils/auth';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const tokenAccess = localStorage.getItem(LOCAL_STORAGE.TOKEN_ACCESS);
    if (!tokenAccess) {
      redirectToLogin();
    }

    router.push({ pathname: '/' });
  }, []);

  return null;
}
