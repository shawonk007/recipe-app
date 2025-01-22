<script>
import api from '@/api.js';

export default {
  name: 'home-recipe',
  data() {
    return {
      recipes: [],
      loading: true,
    }
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await api.get(`/recipes?limit=9&sortBy=id&order=desc&select=id,name,image,cuisine,rating`);
        this.recipes = response.data.recipes;
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        this.loading = false;
      }
    }
  },
}
</script>

<template>
  <section class="block px-28 py-28" >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
      <div v-for="recipe in recipes" class="block border border-teal-300 rounded shadow-lg p-4" :key="recipe.id" data-aos="fade-up" :data-aos-delay="recipe.id * 100" data-aos-duration="1000" >
        <div>
          <img :src="recipe.image" class="rounded" :alt="recipe.name + ' Thumnail'" />
        </div>
        <h3 class="text-lg text-center font-nova font-extrabold my-3" >{{ recipe.name }}</h3>
        <div class="flex justify-between items-center text-sm" >
          <h6 class="inline-block font-semibold bg-teal-300 rounded-full px-4 py-1" >{{ recipe.cuisine }}</h6>
          <p class="font-medium" >
            <span>{{ recipe.rating }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>