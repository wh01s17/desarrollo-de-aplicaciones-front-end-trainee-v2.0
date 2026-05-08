<template>
  <h1>Hola Mundo!</h1>

  <section>
    <h3>Contador: {{ contador }}</h3>
    <h3>Cuadrado: {{ cuadradoContador }}</h3>

    <div>
      <button @click="contador++">+1</button>
      <button @click="contador--">-1</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const contador = ref(0)

// computed: define un valor calculado a partir de otros refs (variables reactivas).
// Cada vez que counter cambia, Vue actualiza squareCounter de manera automática.
const cuadradoContador = computed(() => contador.value * contador.value)
</script>

<style scoped>
h1 {
  color: green;
}
</style>
