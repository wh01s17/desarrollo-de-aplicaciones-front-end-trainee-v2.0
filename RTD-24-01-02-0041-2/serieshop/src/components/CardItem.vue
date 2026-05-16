<script setup>
import SerieModal from './SerieModal.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const { id, titulo, descripcion, imagen, precio, categoria, rating } = props.data

const modalId = `modal-${id}`
</script>

<template>
  <li class="col-12 col-md-4 col-lg-3">
    <article
      class="card h-100 card-clickeable"
      data-bs-toggle="modal"
      :data-bs-target="`#${modalId}`"
    >
      <img :src="imagen" :alt="titulo" class="card-img-top object-fit-cover" />

      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ titulo }}</h5>

        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="badge text-bg-secondary">{{ categoria }}</span>
          <span class="small">⭐️ {{ rating }}</span>
        </div>

        <p class="card-text small descripcion" v-html="descripcion"></p>
        <strong class="mt-auto fs-5">${{ precio.toLocaleString('es-CL') }}</strong>
      </div>
    </article>

    <SerieModal :modal-id="modalId" :data="props.data" />
  </li>
</template>

<style scoped>
.card-img-top {
  aspect-ratio: 2/3;
}

.descripcion {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-clickeable {
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card-clickeable:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
}
</style>
