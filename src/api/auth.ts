import axios from 'axios';

// Principe de la Facade (design pattern)
class Fetcher {
  static async post<T>(url: string, data: object): Promise<T> {
    const response = await axios.post<T>(`${url}`, data);
    return response.data;
  }

  static async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(`${url}`);
    return response.data;
  }
}

type AuthResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
  }
};

export const registerUser = async ({ email, password }: { email: string, password: string }): Promise<AuthResponse> => {
  const response = await axios.post('http://localhost:4000/register', { email, password });
  return response.data;
};

export const login = async ({email, password}: { email: string, password: string }): Promise<AuthResponse> => {
  const response = await Fetcher.post<AuthResponse>('http://localhost:4000/login', {
    email,
    password,
  });
  return response;
};