import axios from "axios";

// using axios to fetch data from backend
const fetchData = async () => {
  try {
    const response = await api.get("https://your-api-endpoint.com/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
//sign up

const signUp = async (username, email, password) => {
  try {
    const response = await api.post("https://your-api-endpoint.com/signup", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
  }
};
