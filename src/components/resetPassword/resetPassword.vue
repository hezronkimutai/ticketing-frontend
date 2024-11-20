<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Reset Password</h1>

      <form @submit.prevent="handleResetPassword">
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" id="password" v-model="formData.password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your password" required />
        </div>
        <div class="mb-4">
          <label for="r-password" class="block text-sm font-medium text-gray-700 mb-1">Repeat Password</label>
          <input type="password" id="r-password" v-model="formData.rPassword"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Repeat password" required />
        </div>
        <button type="submit"
          class="w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Reset Password
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'ResetPassword',
  setup() {
    const formData = reactive({
      password: '',
      rpassword: '',
    });

    const handleResetPassword = () => {
      console.log('ResetPassword Data:', formData);
      alert('ResetPassword Successful');
    };

    return {
      formData,
      handleResetPassword,
    };
  },
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
