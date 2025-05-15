import { useAppDispatch } from '@/redux/hooks';
import { onAuthLogout } from '@/redux/slices/authSlice';
import { useLayoutEffect } from 'react';
import { Navigate } from 'react-router';

const Logout = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(onAuthLogout())
  }, [])

  return <Navigate to='/login' />;
};

export default Logout;
