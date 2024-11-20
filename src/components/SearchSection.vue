<template>
    <div class="bg-blue-50 py-12 px-6">
      <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-center mb-6">Find Your Perfect Event</h1>
        <div class="grid grid-cols-4 gap-4">
          <input 
            type="text" 
            placeholder="Location" 
            class="w-full px-4 py-2 border rounded"
            v-model="searchParams.location"
          />
          <input 
            type="date" 
            class="w-full px-4 py-2 border rounded"
            v-model="searchParams.date"
          />
          <select 
            class="w-full px-4 py-2 border rounded"
            v-model="searchParams.category"
          >
            <option value="">All Categories</option>
            <option value="concerts">Concerts</option>
            <option value="sports">Sports</option>
            <option value="theater">Theater</option>
          </select>
          <input 
            type="number" 
            placeholder="Guests" 
            min="1"
            class="w-full px-4 py-2 border rounded"
            v-model.number="searchParams.guests"
          />
        </div>
        <button 
          @click="handleSearch"
          class="w-full mt-4 bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Search Events
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchSection',
    data() {
      return {
        searchParams: {
          location: '',
          date: '',
          category: '',
          guests: 1
        }
      }
    },
    methods: {
      handleSearch() {
        console.log('Searching with params:', this.searchParams)
        // Implement search logic
      }
    }
  }
  </script>