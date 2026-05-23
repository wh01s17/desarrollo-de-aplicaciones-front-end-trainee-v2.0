<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const catalogo = {
  1: { nombre: 'Café', precio: 2000, descripcion: 'Café de grano' },
  2: { nombre: 'Té', precio: 1500, descripcion: 'Té de hierbas' },
  3: { nombre: 'Muffin', precio: 1200, descripcion: 'Muffin de arándano' },
}

const producto = catalogo[props.id]
</script>

<template>
  <section>
    <router-link to="/productos"> Volver a productos </router-link>

    <h2 class="mt-3">Detalle del producto #{{ id }}</h2>

    <div v-if="producto" class="card p-3">
      <h3>{{ producto.nombre }}</h3>
      <p class="text-muted">${{ producto.precio }}</p>
      <p>{{ producto.descripcion }}</p>
    </div>

    <p v-else class="text-danger">No existe un producto con la id: {{ id }}</p>
  </section>
</template>

<style scoped></style>
