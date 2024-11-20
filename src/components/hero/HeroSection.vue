<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Find and Book Amazing Events</h1>
        <p>Discover the best concerts, sports, and entertainment events near you</p>
        <search-bar />
        <base-button>Explore Events</base-button>
      </div>
    </section>
  </template>
  
  <script>
  import SearchBar from '../shared/SearchBar.vue'
  import BaseButton from '../shared/BaseButton.vue'
  
  export default {
    name: 'HeroSection',
    components: {
      SearchBar,
      BaseButton
    }
  }
  </script>
  