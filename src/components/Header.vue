<template>
    <header class="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <div class="text-2xl font-bold">TicketMaster</div>
      <nav class="flex space-x-4">
        <router-link to="/" class="hover:text-blue-200">Home</router-link>
        <router-link to="/events" class="hover:text-blue-200">Events</router-link>
        <router-link to="/categories" class="hover:text-blue-200">Categories</router-link>
        <button class="bg-white text-blue-600 px-4 py-2 rounded">Login</button>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>