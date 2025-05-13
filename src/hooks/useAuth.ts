import { useState } from 'react'

const useAuth = () => {
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState('');
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const onLogin = () => {
    setConnected(true);
    setEmail('user@email.com');
    setAccessToken('eyfddfvs.64y5.dfsdv');
  };
  return {
    connected,
    email,
    accessToken,
    onLogin
  }
}

export default useAuth