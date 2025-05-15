import { createContext, useContext } from 'react';

type AuthContextType = {
  accessToken: string | null;
  id: number | null;
  email: string | null;
  connected: boolean;
  loginUser: (accessToken: string, user: {id: number, email: string}) => void;
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
