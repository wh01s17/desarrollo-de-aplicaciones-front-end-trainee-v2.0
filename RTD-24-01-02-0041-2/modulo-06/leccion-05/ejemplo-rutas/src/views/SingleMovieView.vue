<script setup>
defineProps({
  id: String,
})
</script>

<template>
  <h2>Película {{ id }}</h2>

  <router-link to="/movies">Volver al listado</router-link>
</template>
