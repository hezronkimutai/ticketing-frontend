<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Signup</h1>

      <form @submit.prevent="handleSignup">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'SignupForm',
  setup() {
    const formData = reactive({
      username: '',
      email: '',
      password: '',
    });

    const handleSignup = () => {
      console.log('Signup Data:', formData);
      alert('Signup Successful');
    };

    return {
      formData,
      handleSignup,
    };
  },
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
