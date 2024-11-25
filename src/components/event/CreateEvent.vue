<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">Create Event</h1>

      <form @submit.prevent="handleCreateEvent" class="space-y-6">
        <!-- Event Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
          <input type="text" id="name" v-model="formData.name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" required />
        </div>

        <!-- Description -->
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea id="description" v-model="formData.description" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"></textarea>
        </div>

        <!-- Category and User ID -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input type="text" id="category" v-model="formData.category" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" required />
          </div>
          <div>
            <label for="userId" class="block text-sm font-medium text-gray-700 mb-1">User ID</label>
            <input type="text" id="userId" v-model="formData.userId" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" required />
          </div>
        </div>

        <!-- Date and Time -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="startDate" class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input type="date" id="startDate" v-model="formData.startDate" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" required />
          </div>
          <div>
            <label for="endDate" class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input type="date" id="endDate" v-model="formData.endDate" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </div>
        </div>

        <!-- Start and End Time -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="startTime" class="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
            <input type="time" id="startTime" v-model="formData.startTime" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </div>
          <div>
            <label for="endTime" class="block text-sm font-medium text-gray-700 mb-1">End Time</label>
            <input type="time" id="endTime" v-model="formData.endTime" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </div>
        </div>

        <!-- Venue and Address -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="venue" class="block text-sm font-medium text-gray-700 mb-1">Venue</label>
            <input type="text" id="venue" v-model="formData.venue" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" required />
          </div>
          <div>
            <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" id="address" v-model="formData.address" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="w-full py-3 px-6 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
          Create Event
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
import { createEvent } from '../../services/events.api';
import { reactive, ref } from 'vue';

export default {
  name: 'CreateEventForm',
  setup() {
    const formData = reactive({
      name: '',
      description: '',
      category: '',
      userId: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      venue: '',
      address: '',
      city: '',
      state: '',
      country: '',
      ticketPrice: 0,
      currency: '',
      ticketLimit: null,
      ticketType: '',
      status: 'Draft',
      visibility: 'Public',
      isFeatured: false,
      contactEmail: '',
      contactPhone: '',
    });

    const errorMessage = ref('');

    const handleCreateEvent = async () => {
      try {
        await createEvent(formData);
      } catch (error) {
        errorMessage.value = error.response?.data?.message || 'An error occurred. Please try again.';
      }
    };

    return {
      formData,
      handleCreateEvent,
      errorMessage,
    };
  },
};
</script>
