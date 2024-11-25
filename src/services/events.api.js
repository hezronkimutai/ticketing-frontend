import api from ".";
const API_URL = "/events";

export const getAll = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Failed to fetch events");
  }
}

export const getById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event ${id}:`, error);
    throw new Error(`Failed to fetch event ${id}`);
  }
}

export const createEvent = async (eventData) => {
  try {
    const response = await api.post(API_URL, eventData);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw new Error("Failed to create event");
  }
}

export const updateEvent = async (id, eventData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, eventData);
    return response.data;
  } catch (error) {
    console.error(`Error updating event ${id}:`, error);
    throw new Error(`Failed to update event ${id}`);
  }
}

export const deleteEvent = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting event ${id}:`, error);
    throw new Error(`Failed to delete event ${id}`);
  }
}
