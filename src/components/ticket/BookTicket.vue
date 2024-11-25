<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Create Ticket</h1>

      <form @submit.prevent="handleCreateTicket" class="space-y-4">
        <!-- User ID Input -->
        <div>
          <label for="userId" class="block text-sm font-medium text-gray-700 mb-1">User ID</label>
          <input type="text" id="userId" v-model="formData.userId"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Event ID Input -->
        <div>
          <label for="eventId" class="block text-sm font-medium text-gray-700 mb-1">Event ID</label>
          <input type="text" id="eventId" v-model="formData.eventId"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Ticket Category ID Input -->
        <div>
          <label for="ticketCategoryId" class="block text-sm font-medium text-gray-700 mb-1">Ticket Category ID</label>
          <input type="text" id="ticketCategoryId" v-model="formData.ticketCategoryId"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Name Input -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" id="name" v-model="formData.name"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" v-model="formData.email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Submit Button -->
        <button type="submit"
          class="w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Create Ticket
        </button>
      </form>

      <!-- Error Message Display -->
      <div v-if="errorMessage" class="mt-4 text-red-500 text-sm text-center">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { createTicket } from '../../services/ticket.api'; // Adjust the import path as needed
import { reactive, ref } from 'vue';

export default {
  name: 'CreateTicketForm',
  setup() {
    const formData = reactive({
      userId: '',
      eventId: '',
      ticketCategoryId: '',
      name: '',
      email: '',
    });

    const errorMessage = ref('');

    const handleCreateTicket = async () => {
      try {
        await createTicket(formData); // Call the service with formData
        alert('Ticket created successfully!'); // Optional success feedback
      } catch (error) {
        errorMessage.value = error.response?.data?.message || 'An error occurred. Please try again.';
      }
    };

    return {
      formData,
      handleCreateTicket,
      errorMessage,
    };
  },
};
</script>
