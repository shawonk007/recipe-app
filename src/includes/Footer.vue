<script>
import api from '@/api.js';

const { author } = api;

export default {
  name: 'footer-bar',
  data() {
    return {
      application: 'Recipe App',
      authorURL : 'https://www.shawon-khan.com',
      developer: null,
      currentYear: new Date().getFullYear(),
      loading: true,
    }
  },
  methods: {
    async fetchAuthorName() {
      try {
        const response = await author.get('/owner-name');
        this.developer = response.data;
      } catch (error) {
        console.error('Error fetching name:', error);
        this.developer = 'Error fetching name';
      }
    }
  },
  mounted() {
    this.fetchAuthorName();
  },
}
</script>

<template>
  <footer class="block bg-emerald-900 px-28 py-2 w-full" >
    <div class="container flex flex-col lg:flex-row justify-evenly lg:justify-between items-center gap-4" >
      <p class="flex items-center gap-1" >
        <span>{{ currentYear }}</span>
        <span>&copy;</span>
        <strong>{{ application }}</strong>
        <span>| All Rights Reserved</span>
      </p>
      <p class="flex items-center gap-1 text-center lg:text-end" >
        <span>Designed By :</span>
        <a :href="authorURL" target="_blank" >
          <strong>{{ developer }}</strong>
        </a>
      </p>
    </div>
  </footer>
</template>