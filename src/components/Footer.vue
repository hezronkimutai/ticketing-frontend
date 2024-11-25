<template>
  <footer class="bg-blue-800 text-white py-8 px-6">
    <div class="container mx-auto flex justify-between">
      <div>
        <h3 class="text-xl font-bold">TicketMaster</h3>
        <p class="mt-2">Your ultimate ticket booking platform</p>
      </div>
      <nav class="flex space-x-4">
        <router-link to="/about" class="hover:text-blue-200">About</router-link>
        <router-link to="/contact" class="hover:text-blue-200">Contact</router-link>
        <router-link to="/privacy-policy" class="hover:text-blue-200">Privacy Policy</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>
