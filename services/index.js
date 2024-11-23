import axios from "axios";

//define token
const token = localStorage.getItem("token"); // replace with your token

const api = axios.create({
  baseURL:   import.meta.env.VITE_API_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export default api;
