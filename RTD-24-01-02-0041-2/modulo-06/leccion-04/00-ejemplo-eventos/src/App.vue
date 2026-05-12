<script setup>
import { ref } from 'vue'

const total = ref(0)
const registro = ref([])
const nota = ref('')

const agregar = (producto) => {
  total.value++
  registro.value.unshift(`Se agregó ${producto}`)
}

const aplicarPromocion = () => {
  total.value = Math.max(0, total.value - 1)
  registro.value.unshift(`Se aplicó la promoción: producto gratis`)
}

const leerNota = (evento) => {
  nota.value = evento.target.value
}

const confirmarNota = () => {
  const texto = nota.value.trim()

  if (!texto) {
    registro.value.unshift('Escribe una nota antes de confirmar')
    return
  }

  registro.value.unshift(`Nota confirmada: ${texto}`)
}

const limpiarNota = () => {
  nota.value = ''
  registro.value.unshift(`Nota limpiada`)
}

const enviarPedido = () => {
  if (total.value === 0) {
    registro.value.unshift('No hay productos en el pedido')
    return
  }

  registro.value.unshift(`Pedido enviado con ${total.value} item(s)`)
  nota.value = ''
  total.value = 0
}
</script>

<template>
  <header class="container text-center">
    <h1>Cafetería</h1>
    <h2>Sistema de Pedidos</h2>
  </header>

  <main class="container app">
    <section class="mb-4">
      <h4 class="mb-4">Productos</h4>

      <button class="btn btn-outline-primary me-2" @click="agregar('Café')">
        <i class="fa-solid fa-mug-hot"></i> Café
      </button>
      <button class="btn btn-outline-success me-2" @click="agregar('Té')">
        <i class="fa-solid fa-mug-hot"></i> Té
      </button>
      <button class="btn btn-outline-danger" @click="agregar('Muffin')">
        <i class="fa-solid fa-cake-candles"></i> Muffin
      </button>

      <p class="mt-3">
        Total de ítems: <b>{{ total }}</b>
      </p>
    </section>

    <section class="mb-4">
      <h4>Promoción</h4>

      <button class="btn btn-success" @click.once="aplicarPromocion" :disabled="total === 0">
        Aplicar promoción: producto gratis (solo una vez)
      </button>
    </section>

    <section class="mb-4">
      <h4>Nota del pedido</h4>

      <input
        type="text"
        :value="nota"
        @input="leerNota($event)"
        @keyup.enter="confirmarNota"
        @keydown.esc="limpiarNota"
        class="form-control"
        placeholder="Enter para confirmar, ESC para limpiar"
      />
    </section>

    <form class="mb-4" @submit.prevent="enviarPedido">
      <button class="btn btn-primary">Enviar pedido</button>
    </form>

    <section>
      <h4>Registro de acciones</h4>
      <ul class="list-group">
        <li v-for="(accion, indice) in registro" :key="indice" class="list-group-item">
          {{ accion }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.app {
  max-width: 600px;
}
</style>
