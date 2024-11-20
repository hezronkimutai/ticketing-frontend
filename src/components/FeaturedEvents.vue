<template>
    <section class="py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-8">Featured Events</h2>
        <div class="grid grid-cols-3 gap-6">
          <div 
            v-for="event in events" 
            :key="event.id" 
            class="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold">{{ event.title }}</h3>
              <p class="text-gray-600">{{ event.date }}</p>
              <p class="text-gray-600">{{ event.location }}</p>
              <div class="flex justify-between items-center mt-4">
                <span class="text-blue-600 font-bold">{{ event.price }}</span>
                <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FeaturedEvents',
    data() {
      return {
        events: [
          { 
            id: 1, 
            title: 'Summer Music Festival', 
            date: 'July 15-16', 
            location: 'Central Park, NY', 
            price: '$99',
            image: 'https://via.placeholder.com/300x200'
          },
          { 
            id: 2, 
            title: 'Championship Basketball', 
            date: 'August 20', 
            location: 'Madison Square Garden', 
            price: '$150',
            image: 'https://via.placeholder.com/300x200'
          },
          { 
            id: 3, 
            title: 'Broadway Musical Show', 
            date: 'September 5', 
            location: 'Broadway Theater', 
            price: '$85',
            image: 'https://via.placeholder.com/300x200'
          }
        ]
      }
    }
  }
  </script>