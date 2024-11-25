<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Verify Email
      </h1>

      <form @submit.prevent="handleVerifyEmail">
        <button type="submit"
          class="w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Verify Email
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VerifyEmail',
  setup() {
    const formData = reactive({
    });

    const handleVerifyEmail = () => {
      console.log('VerifyEmail Data:', formData);
      alert('VerifyEmail Successful');
    };

    return {
      formData,
      handleVerifyEmail,
    };
  },
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
