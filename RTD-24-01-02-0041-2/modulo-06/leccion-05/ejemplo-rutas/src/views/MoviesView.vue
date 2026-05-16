<script setup>
const movies = [
  { id: 1, title: 'Matrix' },
  { id: 2, title: 'Interestelar' },
  { id: 3, title: 'Coco' },
]
</script>

<template>
  <section>
    <h2>Películas</h2>

    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="`/movies/${movie.id}`">
          {{ movie.title }}
        </router-link>
      </li>
    </ul>
  </section>
</template>
