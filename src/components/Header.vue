<template>
  <header class="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
    <div class="text-2xl font-bold">TicketMaster</div>
    <nav class="flex space-x-4">
      <router-link to="/" class="hover:text-blue-200">Home</router-link>
      <router-link to="/events" class="hover:text-blue-200">Events</router-link>
      <router-link to="/book" class="hover:text-blue-200">Book</router-link>
      <router-link to="/status" class="hover:text-blue-200">Status</router-link>
      <router-link to="/create-event"> Create Event </router-link>
      <router-link to="/signin" class="hover:text-blue-200">Signin</router-link>
      <router-link to="/signup" class="hover:text-blue-200">Signup</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent'
}
</script>