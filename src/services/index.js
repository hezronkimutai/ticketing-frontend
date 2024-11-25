import axios from "axios";

const apiUrl = import.meta?.env?.VITE_API_URL || ''
const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: apiUrl || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export default api;
