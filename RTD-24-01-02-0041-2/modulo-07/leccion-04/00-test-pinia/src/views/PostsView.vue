<script setup>
import { usePostsStore } from '@/stores/postsStore'
import { onMounted } from 'vue'

const postStore = usePostsStore()

onMounted(() => {
  postStore.cargar()
})
</script>

<template>
  <section>
    <h1>Posts</h1>

    <p v-if="postStore.loading">Cargando...</p>

    <p v-else-if="postStore.error">{{ postStore.error }}</p>

    <ul v-else>
      <li v-for="post in postStore.items" :key="post.id">
        {{ post.title }}
      </li>
    </ul>

    <!-- Se puede establecer el punto de inicio de una etiqueta <ol> con el atributo start -->
    <!-- <ol start="10">
      <li v-for="post in postStore.items">
        {{ post.title }}
      </li>
    </ol> -->
  </section>
</template>
