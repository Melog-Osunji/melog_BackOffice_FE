import axios from "axios";
import { ENV } from "../lib/env";
import { useAuthStore } from "../stores/auth.store";

export const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // 쿠키 기반이면 true
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
