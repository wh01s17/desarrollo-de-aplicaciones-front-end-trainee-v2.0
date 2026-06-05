<script setup>
import { ref } from 'vue'
import AccessForm from './components/AccessForm.vue'

const res = ref('')

const handleSubmit = (payload) => {
  res.value = payload
}
</script>

<template>
  <main class="app">
    <h1>Plataforma Educativa</h1>

    <AccessForm @submit="handleSubmit" />

    <br />
    <code>
      <pre>
      {{ res }}
    </pre
      >
    </code>
  </main>
</template>

<style scoped>
.app {
  max-width: 420px;
  margin: 3rem auto;
  font-family: system-ui, sans-serif;
}
</style>
