<template>
  <div class="flex items-center justify-center min-h-screen py-4">
    <div class="w-full max-w-3xl bg-white p-8 rounded-lg shadow-2xl">
      <!-- Address Details Section -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p class="text-gray-600 text-lg">We'd love to hear from you! Reach out to us using the details below or the
          contact form.</p>
      </div>

      <div class="flex flex-col md:flex-row justify-between mb-8">
        <!-- Address -->
        <div class="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Our Office</h2>
          <p class="text-gray-700 mb-2"><i class="fas fa-map-marker-alt text-indigo-500 mr-2"></i>123 Main Street, Suite
            500</p>
          <p class="text-gray-700 mb-2">Nairobi, Kenya 00100</p>

          <h2 class="text-2xl font-semibold text-indigo-600 mt-6 mb-4">Phone</h2>
          <p class="text-gray-700 mb-2"><i class="fas fa-phone text-indigo-500 mr-2"></i>Office: +254 700 123 456</p>
          <p class="text-gray-700"><i class="fas fa-phone text-indigo-500 mr-2"></i>Support: +254 711 987 654</p>
        </div>

        <!-- Social Media -->
        <div class="text-center md:text-left md:w-1/2">
          <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Follow Us</h2>
          <div class="flex justify-center md:justify-start space-x-6">
            <a href="https://facebook.com" target="_blank" class="text-indigo-600 hover:text-indigo-800 text-3xl">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-indigo-600 hover:text-indigo-800 text-3xl">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="text-indigo-600 hover:text-indigo-800 text-3xl">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <form @submit.prevent="handleContact" class="bg-gray-100 p-6 rounded-lg">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" id="name" v-model="formData.name"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your name" required />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" v-model="formData.email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your email" required />
        </div>

        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" v-model="formData.message" rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Write your message" required></textarea>
        </div>

        <button type="submit"
          class="w-full py-3 px-6 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'ContactUsPage',
  setup() {
    const formData = reactive({
      name: '',
      email: '',
      message: '',
    });

    const handleContact = () => {
      console.log('Contact Data:', formData);
      alert('Message sent successfully! We will get back to you soon.');
      // Optionally, reset the form
      formData.name = '';
      formData.email = '';
      formData.message = '';
    };

    return {
      formData,
      handleContact,
    };
  },
};
</script>

<style scoped>
/* Scoped styles to enhance icons and form */
i {
  transition: transform 0.3s;
}

i:hover {
  transform: scale(1.1);
}
</style>
