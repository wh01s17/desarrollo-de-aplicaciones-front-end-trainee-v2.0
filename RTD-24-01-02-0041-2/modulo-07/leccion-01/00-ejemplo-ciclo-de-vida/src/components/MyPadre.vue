<script setup>
import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'
import MyHijo from './MyHijo.vue'

const mensajeParaHijo = ref('Hola, soy el componente padre')
const respuesta = ref('')

const recibirMensaje = (mensaje) => {
  respuesta.value = mensaje
}

// Acciones que se ejecutan al montar un componente
onMounted(() => {
  console.log('[Padre] onMounted: el componente se insertó en el DOM')
})

// Acciones que se ejecutan cuando el DOM reacciona a un cambio de estado
onUpdated(() => {
  console.log('[Padre] onUpdated: el DOM reaccionó a un cambio de estado')
})

// Acciones que se ejecutan antes que el componente de desmonte
onBeforeUnmount(() => {
  console.log('[Padre] onBeforeUnmount: el componente esta por ser destruido :o')
})
</script>

<template>
  <section>
    <h2>Componente Padre</h2>
    <MyHijo :mensaje="mensajeParaHijo" @respuesta-hijito="recibirMensaje" />

    <p v-if="respuesta">El hijo respondió: {{ respuesta }}</p>
  </section>
</template>

<style scoped></style>
