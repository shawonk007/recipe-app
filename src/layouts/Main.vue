<script>
import Footer from '@/includes/Footer.vue';

export default {
  name: 'main-layout',
  components: { Footer }
}
</script>

<template>
  <main>
    <slot />
  </main>
  <Footer />
</template>