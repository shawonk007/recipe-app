<script>
import Section from '@/components/global/Section.vue'
import api from '@/api.js';

export default {
  name: 'home-recipe',
  data() {
    return {
      recipes: [],
      loading: true,
    }
  },
  components: { Section },
  created() {
    this.fetchRecipes();
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await api.get(`/recipes?limit=6&sortBy=id&order=desc&select=id,name,image,cuisine,rating`);
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
  <Section v-if="loading" theme="bg-gray-100" >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
      <div v-for="recipe in recipes" class="block border border-teal-300 rounded shadow-lg p-4 animate-pulse" :key="recipe.id" >
        <div class="block bg-teal-300 rounded w-full h-80" ></div>
        <div class="block bg-teal-300 rounded-full mt-4 w-full h-6" ></div>
        <div class="flex justify-between items-center" >
          <div class="inline-block bg-teal-300 rounded-full my-4 w-32 h-4" ></div>
          <div class="inline-block bg-teal-300 rounded-full my-4 w-32 h-4" ></div>
        </div>
      </div>
    </div>
  </Section>
  <Section v-else theme="bg-gray-100" >
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
  </Section>
</template>