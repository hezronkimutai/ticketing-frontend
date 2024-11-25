<template>
  <div class="container mx-auto px-4">
    <CreateTicketCategory />
  </div>
</template>

<script>
import CreateTicketCategory from '@/components/ticketCategory/CreateTicketCategory.vue'

export default {
  name: 'BookTicketPage',
  components: {
    CreateTicketCategory
  }
}
</script>
