import api from ".";
const API_URL = "/users";

const UserAPI = {
  async getAll() {
    try {
      const response = await api.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  },

  async getById(id) {
    try {
      const response = await api.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw new Error(`Failed to fetch user ${id}`);
    }
  },

  async create(userData) {
    try {
      const response = await api.post(API_URL, userData);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user");
    }
  },

  async update(id, userData) {
    try {
      const response = await api.put(`${API_URL}/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user ${id}:`, error);
      throw new Error(`Failed to update user ${id}`);
    }
  },

  async delete(id) {
    try {
      await api.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      throw new Error(`Failed to delete user ${id}`);
    }
  },
};

export default UserAPI;
