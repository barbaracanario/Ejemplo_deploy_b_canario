<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

      <nav class="d-flex justify-content-center py-3">
        <RouterLink to="/" class="mx-2">Home</RouterLink>
        <RouterLink to="/about" class="mx-2">About</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>


</style>
