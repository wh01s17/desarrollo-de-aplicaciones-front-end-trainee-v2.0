<script setup>
defineProps({
  producto: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits({
  favorito: () => true,

  eliminar: (id) => typeof id === 'number',

  'actualizar-precio': (payload) =>
    payload && typeof payload.id === 'number' && payload.precio >= 0,
})
</script>

<template>
  <article class="card p-3">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h5>{{ producto.nombre }}</h5>
        <small class="text-muted">$ {{ producto.precio }}</small>

        <div class="mt-1">
          <slot />
        </div>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-sm btn-outline-warning" @click="emit('favorito')">⭐️</button>
        <button class="btn btn-sm btn-outline-danger" @click="emit('eliminar', producto.id)">
          Eliminar
        </button>
        <button
          class="btn btn-sm btn-outline-success"
          @click="
            emit('actualizar-precio', {
              id: producto.id,
              precio: producto.precio,
            })
          "
        >
          +$500
        </button>

        <slot name="extra"></slot>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
