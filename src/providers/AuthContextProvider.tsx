import AuthContext from '../contexts/auth-context';
import { PropsWithChildren, useState } from 'react';

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);

  const loginUser = (accessToken: string, user: { id: number; email: string }) => {
    setAccessToken(accessToken);
    setId(user.id);
    setEmail(user.email);
    setConnected(true);
  };

  const logoutUser = () => {
    setAccessToken(null);
    setId(null);
    setEmail(null);
    setConnected(false);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        id,
        email,
        connected,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
