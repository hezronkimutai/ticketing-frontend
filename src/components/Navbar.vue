// src/components/layout/TheNavbar.vue
<template>
  <nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-2xl font-bold text-primary-600">
            TicketHub
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
          <router-link 
            to="/events" 
            class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Events
          </router-link>
          <router-link 
            to="/create-event" 
            class="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium"
          >
            Create Event
          </router-link>
          <router-link 
            to="/login" 
            class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </router-link>
          <router-link 
            to="/register" 
            class="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </router-link>

        </div>
      </div>
    </div>
  </nav>
</template>

// src/pages/HomePage.vue
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block">Find and Book</span>
                <span class="block text-primary-600">Amazing Events</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover the best concerts, sports events, and entertainment near you. Book tickets easily and securely.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <router-link 
                    to="/events" 
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                  >
                    Browse Events
                  </router-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <router-link 
                    to="/register" 
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up
                  </router-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

    <!-- Featured Events Section -->
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Events
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't miss out on these popular upcoming events
          </p>
        </div>

        <!-- Event Cards -->
        <div class="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Event Card Component -->
          <div v-for="i in 3" :key="i" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-200"></div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900">Event Title</h3>
              <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="mt-4 flex justify-between items-center">
                <span class="text-primary-600 font-bold">$99</span>
                <button class="btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

// src/pages/LoginPage.vue
<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="form-label">Email address</label>
            <input id="email" type="email" required v-model="email" class="input-field">
          </div>

          <div>
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" required v-model="password" class="input-field">
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" type="checkbox" v-model="rememberMe"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-primary-600 hover:text-primary-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" class="w-full btn-primary">
              Sign in
            </button>
          </div>
        </form>

        <div class="mt-6">
          <p class="text-center text-sm text-gray-600">
            Don't have an account?
            <router-link to="/register" class="font-medium text-primary-600 hover:text-primary-500">
              Sign up
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    handleLogin() {
      // Implement login logic
      console.log('Login:', { email: this.email, password: this.password })
    }
  }
}
</script>