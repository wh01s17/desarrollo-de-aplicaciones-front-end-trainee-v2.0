<script setup>
const texto = defineModel({ default: '' })

defineProps({
  placeholder: {
    type: String,
    default: 'Buscar...',
  },
})
</script>

<template>
  <div class="input-group">
    <span class="input-group-text">🔍️</span>
    <input type="text" class="form-control" :placeholder="placeholder" v-model="texto" />

    <button class="btn btn-outline-secondary" type="button" :disabled="!texto" @click="texto = ''">
      Limpiar
    </button>
  </div>
</template>

<style scoped></style>
