<script>
import Navbar from '@/includes/Navbar.vue';
import Footer from '@/includes/Footer.vue';

export default {
  name: 'main-layout',
  components: { Navbar, Footer }
}
</script>

<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>