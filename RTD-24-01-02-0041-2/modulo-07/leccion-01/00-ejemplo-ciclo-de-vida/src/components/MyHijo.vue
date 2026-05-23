<script setup>
defineProps({
  mensaje: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['respuestaHijito'])

const responder = () => {
  emit('respuestaHijito', 'Hola padre, recibí tu mensaje')
}
</script>

<template>
  <section class="hijo">
    <h3>Componente Hijo</h3>

    <p>El padre me envió este mensaje:</p>
    <blockquote class="cita">
      {{ mensaje }}
    </blockquote>

    <button @click="responder">Responder al padre</button>
  </section>
</template>

<style scoped>
.hijo {
  border: 2px dashed #0f9d43;
  padding: 0 1rem;
  margin-top: 2rem;
  border-radius: 8px;
}

.cita {
  background-color: #f3f4f6;
  padding: 0 0.5rem;
  border-left: 4px solid #0f9d43;
}
</style>
