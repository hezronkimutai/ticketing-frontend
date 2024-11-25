import api from ".";

const API_URL = "/ticket-categories";

export const getAll = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching ticket categories:", error);
    throw new Error("Failed to fetch ticket categories");
  }
}

export const getById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ticket category ${id}:`, error);
    throw new Error(`Failed to fetch ticket category ${id}`);
  }
}

export const createCategory = async (eventStore, categoryData) => {
  try {
    const response = await api.post(API_URL, categoryData);
    return response.data;
  } catch (error) {
    console.error("Error creating ticket category:", error);
    throw new Error("Failed to create ticket category");
  }
}

export const updateCategory = async (id, categoryData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error(`Error updating ticket category ${id}:`, error);
    throw new Error(`Failed to update ticket category ${id}`);
  }
}

export const deleteCategory = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting ticket category ${id}:`, error);
    throw new Error(`Failed to delete ticket category ${id}`);
  }
}
