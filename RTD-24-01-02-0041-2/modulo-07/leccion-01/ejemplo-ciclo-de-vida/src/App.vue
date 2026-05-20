<script setup>
import { ref } from 'vue'
import MyPadre from './components/MyPadre.vue'

const mostrarPadre = ref(true)
</script>

<template>
  <main class="app">
    <h1>Componentes y Ciclo de Vida 🐘</h1>

    <button @click="mostrarPadre = !mostrarPadre" class="btn">
      {{ mostrarPadre ? 'Ocultar' : 'Mostrar' }} componente padre
    </button>

    <MyPadre v-if="mostrarPadre" />
  </main>
</template>

<style scoped>
.app {
  max-width: 600px;
  margin: 2rem auto;
}

.btn {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
