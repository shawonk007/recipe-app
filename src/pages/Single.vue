<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Main from '@/layouts/Main.vue';
import Section from '@/components/global/Section.vue';
import api from '@/api.js';

const { dummy } = api;

export default {
  name: 'single-recipe',
  data() {
    return {
      recipe: null,
      loading: true,
      error: null,
      title: '',
    };
  },
  components: { Main, Section },
  created() {
    this.fetchRecipe();
  },
  methods: {
    async fetchRecipe() {
      const route = useRoute();
      const recipeId = route.params.id;
      this.title = route.params.name;

      try {
        const response = await dummy.get(`/recipes/${recipeId}`);
        this.recipe = response.data;
      } catch (error) {
        console.error('Error fetching recipe:', error);
        this.error = 'Failed to load recipe. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
  },
}
</script>

<template>
  <Main>
    <Section v-if="loading" >
      <div class="loading">Loading recipe...</div>
    </Section>
    <Section v-else-if="error" >
      <div  class="error">{{ error }}</div>
    </Section>
    <Section v-else >
      <div class="flex justify-center items-center gap-28" >
        <div class="block w-2/5" >
          <img :src="recipe.image" alt="" />
        </div>
        <div class="block w-3/5" >
          <h1 class="text-4xl font-nova font-extrabold" >{{ recipe.name }}</h1>
          <p><strong>Difficulty:</strong> {{ recipe.difficulty }}</p>
          <p><strong>Cuisine:</strong> {{ recipe.cuisine }}</p>
          <p><strong>Calories:</strong> {{ recipe.caloriesPerServing }} per serving</p>
          <p><strong>Prep Time:</strong> {{ recipe.prepTimeMinutes }} mins</p>
          <p><strong>Cook Time:</strong> {{ recipe.cookTimeMinutes }} mins</p>
          <p>
            <span v-for="(tag, index) in recipe.tags" :key="index" >{{ tag }}</span>
          </p>
          <p>
            <span v-for="(meal, index) in recipe.mealType" :key="index" >{{ meal }}</span>
          </p>
        </div>
      </div>
      <div class="my-28" >
        <h2>Ingredients</h2>
        <ul class="grid grid-cols-3" >
          <li v-for="(ingredient, index) in recipe.ingredients" class="inline-block" :key="index">{{ ingredient }}</li>
        </ul>
      </div>
      <div>
        <h2>Instructions</h2>
        <ul class="grid grid-cols-1" >
          <li v-for="(instruction, index) in recipe.instructions" class="inline-block" :key="index">{{ instruction }}</li>
        </ul>
      </div>
    </Section>
  </Main>
</template>