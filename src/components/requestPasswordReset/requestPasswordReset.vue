<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Request Email Verification</h1>

      <form @submit.prevent="handleRequestEmailVerification">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" v-model="formData.email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your email" required />
        </div>
        <button type="submit"
          class="w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Request Email Verification
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'RequestPasswordReset',
  setup() {
    const formData = reactive({
      email: '',
    });

    const handleRequestEmailVerification = () => {
      console.log('RequestEmailVerification Data:', formData);
      alert('RequestEmailVerification Successful');
    };

    return {
      formData,
      handleRequestEmailVerification,
    };
  },
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
