import { useAuthContext } from '@/contexts/auth-context';
import { useLayoutEffect } from 'react';
import { Navigate } from 'react-router';

const Logout = () => {
  const { logoutUser } = useAuthContext();

  useLayoutEffect(() => {
    logoutUser();
  }, [])

  return <Navigate to='/login' />;
};

export default Logout;
