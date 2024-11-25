<template>
  <div class="container mx-auto px-4">
    <PrivacyPolicy />
  </div>
</template>

<script>
import PrivacyPolicy from '@/components/privacyPolicy/PrivacyPolicy.vue';

export default {
  name: 'SignupPage',
  components: {
    PrivacyPolicy
  }
}
</script>
