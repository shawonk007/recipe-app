<script>
export default {
  name: 'content-section',
  props: {
    theme: {
      type: String,
      default: 'bg-gray-100',
    },
  },
}
</script>

<template>
  <section class="block px-6 md:px-14 lg:px-20 xl:px-28 py-6 md:py-14 lg:py-20 xl:py-28" :class="theme" aria-label="Content Section" >
    <div class="container" >
      <slot />
    </div>
  </section>
</template>