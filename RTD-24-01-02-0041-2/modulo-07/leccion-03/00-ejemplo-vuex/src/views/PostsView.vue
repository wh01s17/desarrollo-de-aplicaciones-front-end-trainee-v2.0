<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const items = computed(() => store.state.posts.items)
const loading = computed(() => store.state.posts.loading)
const error = computed(() => store.state.posts.error)

onMounted(() => {
  store.dispatch('posts/cargar')
})
</script>

<template>
  <h2>Posts</h2>

  <p v-if="loading">Cargando...</p>
  <p v-else-if="error">{{ error }}</p>
  <ul v-else>
    <li v-for="post in items" :key="post.id">
      <strong>{{ post.title }}</strong>
    </li>
  </ul>
</template>
