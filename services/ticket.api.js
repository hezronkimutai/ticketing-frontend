

import api from ".";
const API_URL = "/ticket";

const TicketAPI = {
  async getAll() {
    try {
      const response = await api.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching tickets:", error);
      throw new Error("Failed to fetch tickets");
    }
  },

  async getById(id) {
    try {
      const response = await api.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ticket ${id}:`, error);
      throw new Error(`Failed to fetch ticket ${id}`);
    }
  },

  async create(ticketData) {
    try {
      const response = await api.post(API_URL, ticketData);
      return response.data;
    } catch (error) {
      console.error("Error creating ticket:", error);
      throw new Error("Failed to create ticket");
    }
  },

  async update(id, ticketData) {
    try {
      const response = await api.put(`${API_URL}/${id}`, ticketData);
      return response.data;
    } catch (error) {
      console.error(`Error updating ticket ${id}:`, error);
      throw new Error(`Failed to update ticket ${id}`);
    }
  },

  async delete(id) {
    try {
      await api.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting ticket ${id}:`, error);
      throw new Error(`Failed to delete ticket ${id}`);
    }
  },
};

export default TicketAPI;
