import api from ".";

const API_URL = "/api/users";


export const getAll = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export const getById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw new Error(`Failed to fetch user ${id}`);
  }
}

export const createUser = async (userStore, userData) => {
  try {
    const response = await api.post(API_URL, userData);
    userStore.addCreatedUser(response.data)
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    throw new Error(`Failed to update user ${id}`);
  }
}

export const deleteUser = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    throw new Error(`Failed to delete user ${id}`);
  }
}

