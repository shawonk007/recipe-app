<script>
export default {
  name: 'navbar',
  data() {
    return {
      application: 'Recipe App'
    }
  },
}
</script>

<template>
  <nav class="fixed bg-zinc-300 top-0 px-28 py-4 shadow-lg w-full z-50" >
    <div class="container" >
      <router-link :to="{ name: 'home' }" >
        <strong class="text-3xl font-dancing font-extrabold" >{{ application }}</strong>
      </router-link>
    </div>
  </nav>
</template>