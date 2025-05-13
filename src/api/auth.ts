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

export const registerUser = async () => {
  const response = await Fetcher.post('http://localhost:4000/register', {
    email: 'user@email.com',
    password: 'password',
  });
  return response;
};

export const loginUser = async () => {
  const response = await Fetcher.post('http://localhost:4000/login', {
    email: 'user@email.com',
    password: 'password',
  });
  return response;
};