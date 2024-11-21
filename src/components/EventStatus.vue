<template>
    <div class="event-status-container">
      <h2>Your Event Status</h2>
  
      <div class="event-lists">
        <!-- Booked Events -->
        <div class="booked-events">
          <h3>Booked Events</h3>
          <ul v-if="bookedEvents.length > 0">
            <li v-for="event in bookedEvents" :key="event.id">
              <strong>{{ event.name }}</strong> - {{ event.date }}
              <button @click="cancelEvent(event.id)">Cancel</button>
            </li>
          </ul>
          <p v-else>No booked events at the moment.</p>
        </div>
  
        <!-- Canceled Events -->
        <div class="canceled-events">
          <h3>Canceled Events</h3>
          <ul v-if="canceledEvents.length > 0">
            <li v-for="event in canceledEvents" :key="event.id">
              <strong>{{ event.name }}</strong> - {{ event.date }}
              <button @click="rebookEvent(event.id)">Rebook</button>
            </li>
          </ul>
          <p v-else>No canceled events at the moment.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventStatusComponent",
    data() {
      return {
        events: [
          { id: 1, name: "Music Festival", date: "2024-11-25", status: "booked" },
          { id: 2, name: "Tech Conference", date: "2024-12-05", status: "canceled" },
          { id: 3, name: "Art Workshop", date: "2024-11-30", status: "booked" },
        ],
      };
    },
    computed: {
      bookedEvents() {
        return this.events.filter((event) => event.status === "booked");
      },
      canceledEvents() {
        return this.events.filter((event) => event.status === "canceled");
      },
    },
    methods: {
      cancelEvent(eventId) {
        const eventIndex = this.events.findIndex((event) => event.id === eventId);
        if (eventIndex !== -1) {
          this.events[eventIndex].status = "canceled";
          alert("Event has been canceled.");
        }
      },
      rebookEvent(eventId) {
        const eventIndex = this.events.findIndex((event) => event.id === eventId);
        if (eventIndex !== -1) {
          this.events[eventIndex].status = "booked";
          alert("Event has been rebooked.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .event-status-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .event-lists {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  
  .booked-events,
  .canceled-events {
    width: 45%;
  }
  
  h2,
  h3 {
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    text-align: center;
    color: #555;
  }
  </style>
  