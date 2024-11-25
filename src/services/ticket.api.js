import api from ".";

const API_URL = "/ticket";

export const getAll = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw new Error("Failed to fetch tickets");
  }
}

export const getById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ticket ${id}:`, error);
    throw new Error(`Failed to fetch ticket ${id}`);
  }
}

export const createTicket = async (ticketStore, ticketData) => {
  try {
    const response = await api.post(API_URL, ticketData);
    return response.data;
  } catch (error) {
    console.error("Error creating ticket:", error);
    throw new Error("Failed to create ticket");
  }
}

export const updateTicket = async (id, ticketData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, ticketData);
    return response.data;
  } catch (error) {
    console.error(`Error updating ticket ${id}:`, error);
    throw new Error(`Failed to update ticket ${id}`);
  }
}

export const deleteTicket = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting ticket ${id}:`, error);
    throw new Error(`Failed to delete ticket ${id}`);
  }
}
