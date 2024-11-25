<template>
  <div class="container mx-auto px-4">
    <SearchSection />
    <FeaturedEvents />
  </div>
</template>

<script>
import SearchSection from '@/components/SearchSection.vue'
import FeaturedEvents from '@/components/FeaturedEvents.vue'

export default {
  name: 'HomePage',
  components: {
    SearchSection,
    FeaturedEvents
  }
}
</script>