<script setup>
const props = defineProps({
  modalId: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
})

const { titulo, imagen, categoria, rating, descripcion, precio } = props.data
</script>

<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    :aria-labelledby="`${modalId}-label`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ titulo }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Cerrar"
          ></button>
        </div>

        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-4">
              <img :src="imagen" :alt="titulo" class="img-fluid rounded" />
            </div>

            <div class="col-md-8">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge text-bg-secondary">{{ categoria }}</span>
                <span>⭐️ {{ rating }}</span>
              </div>

              <h6 class="text-body-secondary">Sinopsis</h6>

              <div class="text-justify" v-html="descripcion"></div>

              <hr />

              <p class="d-flex fs-4 mb-0 justify-content-end">
                <strong>${{ precio.toLocaleString('es-CL') }}</strong>
              </p>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-warning">
            <i class="fa-solid fa-cart-shopping me-1"></i>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-justify {
  text-align: justify;
}
</style>
