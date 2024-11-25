<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Create Ticket Category</h1>

      <form @submit.prevent="handleCreateTicketCategory" class="space-y-4">
        <!-- Event ID Input -->
        <div>
          <label for="eventId" class="block text-sm font-medium text-gray-700 mb-1">Event ID</label>
          <input type="text" id="eventId" v-model="formData.eventId"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Name Input -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
          <input type="text" id="name" v-model="formData.name"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Price Input -->
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Price</label>
          <input type="number" id="price" v-model="formData.price" step="0.01"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required />
        </div>

        <!-- Submit Button -->
        <button type="submit"
          class="w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Create Category
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
import { useCategoryStore } from '@/stores/category';
import { createTicketCategory } from '../../services/categories.api'; // Adjust the import path as needed
import { reactive, ref } from 'vue';

export default {
  name: 'CreateTicketCategoryForm',
  setup() {
    const categoryStore = useCategoryStore();
    const formData = reactive({
      eventId: '',
      name: '',
      price: '',
    });

    const errorMessage = ref('');

    const handleCreateTicketCategory = async () => {
      try {
        formData.price = parseFloat(formData.price);

        await createTicketCategory(categoryStore, formData);
        alert('Ticket category created successfully!');
        Object.assign(formData, { eventId: '', name: '', price: '' });
      } catch (error) {
        errorMessage.value = error.response?.data?.message || 'An error occurred. Please try again.';
      }
    };

    return {
      formData,
      handleCreateTicketCategory,
      errorMessage,
    };
  },
};
</script>
