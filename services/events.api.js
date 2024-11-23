import api from ".";
const API_URL = "/events";

const TicketAPI = {
  async getAll() {
    try {
      const response = await api.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw new Error("Failed to fetch tickets");
    }
  },

  async getById(id) {
    try {
      const response = await api.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching event ${id}:`, error);
      throw new Error(`Failed to fetch event ${id}`);
    }
  },

  async create(ticketData) {
    try {
      const response = await api.post(API_URL, ticketData);
      return response.data;
    } catch (error) {
      console.error("Error creating event:", error);
      throw new Error("Failed to create event");
    }
  },

  async update(id, ticketData) {
    try {
      const response = await api.put(`${API_URL}/${id}`, ticketData);
      return response.data;
    } catch (error) {
      console.error(`Error updating event ${id}:`, error);
      throw new Error(`Failed to update event ${id}`);
    }
  },

  async delete(id) {
    try {
      await api.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting event ${id}:`, error);
      throw new Error(`Failed to delete event ${id}`);
    }
  },
};

export default TicketAPI;
