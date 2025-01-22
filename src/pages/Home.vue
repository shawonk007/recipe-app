<script>
import Main from '@/layouts/Main.vue';
import Recipe from '@/components/home/Recipe.vue';

export default {
  name: 'home-page',
  components: { Main, Recipe }
}
</script>

<template>
  <Main>
    <h1>This is Homepage</h1>
    <Recipe />
  </Main>
</template>