<template>
  <div class="container mx-auto px-4">
    <CreateEvent />
  </div>
</template>

<script>
import CreateEvent from '@/components/event/CreateEvent.vue'

export default {
  name: 'SignupPage',
  components: {
    CreateEvent
  }
}
</script>