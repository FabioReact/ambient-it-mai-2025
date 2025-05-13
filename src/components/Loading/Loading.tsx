import type { PropsWithChildren } from 'react';
import Loader from './Loader';

type LoadingProps = PropsWithChildren<{ isLoading: boolean }>;

const Loading = ({ children, isLoading }: LoadingProps) => {
  if (isLoading) return <Loader />;
  return children;
};

export default Loading;
