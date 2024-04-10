import axios from "axios";
import useToken from "states/useToken";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true
});

api.interceptors.request.use(
  config => {
    const { token } = useToken.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  });

export default api;
