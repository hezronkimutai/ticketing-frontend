<template>
    <div class="container mx-auto px-4">
      <SignupForm />
    </div>
  </template>
  
  <script>
  import SignupForm from '@/components/signup/Signup.vue'
  
  export default {
    name: 'SignupPage',
    components: {
      SignupForm
    }
  }
  </script>