<script setup>
import { ref } from 'vue'

const total = ref(0)
const registro = ref([])
const nota = ref('')
const scrollY = ref(0)

const catalogo = ref([
  { id: 1, nombre: 'Latte' },
  { id: 2, nombre: 'Capuchino' },
  { id: 3, nombre: 'Mocha' },
])

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

const logCaptura = () => {
  registro.value.unshift('(captura) click recibido por el contenedor')
}

const seleccionarTarjeta = (producto) => {
  registro.value.unshift(`Tarjeta seleccionada: ${producto.nombre}`)
}

const marcarFavorito = (producto) => {
  registro.value.unshift(`Marcado favorito: ${producto.nombre}`)
}

const onScroll = (evento) => {
  scrollY.value = Math.round(evento.target.scrollTop)
}

const abrirInfo = () => {
  registro.value.unshift('Modal de info (sin navegar)')
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
        @keyup.ctrl.m="confirmarNota"
        class="form-control"
        placeholder="Enter para confirmar, ESC para limpiar"
      />

      <small class="text-muted">Vista previa: {{ nota }}</small>
    </section>

    <section class="mb-4" @click.capture="logCaptura">
      <h4>Catálogo (click en la tarjeta o en favoritos)</h4>

      <div class="d-flex gap-2 flex-wrap">
        <article
          v-for="producto in catalogo"
          :key="producto.id"
          class="card p-2 tarjeta"
          @click="seleccionarTarjeta(producto)"
        >
          <strong>{{ producto.nombre }}</strong>

          <button class="btn btn-sm btn-warning mt-2" @click="marcarFavorito(producto)">
            + Fav
          </button>
        </article>
      </div>
    </section>

    <section class="mb-4">
      <h4>Menú extendido (scroll)</h4>
      <div class="border rounded p-2 menu-scroll" @scroll.passive="onScroll">
        <p v-for="n in 30" :key="n" class="mb-1">Item del menú #{{ n }}</p>
      </div>

      <small>Posicion del scroll: {{ scrollY }}px</small>
    </section>

    <section class="mb-4">
      <h4>Más información</h4>
      <a href="https://google.cl" @click.prevent="abrirInfo">Ver politicas (no navega)</a>
    </section>

    <form class="mb-4" @submit.prevent="enviarPedido">
      <button class="btn btn-primary">Enviar pedido</button>
    </form>

    <section>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h4>Registro de acciones</h4>
        <button @click="registro = []" class="btn btn-outline-secondary mb-2">Limpiar</button>
      </div>
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

.tarjeta {
  width: 9rem;
  cursor: pointer;
}

.menu-scroll {
  height: 200px;
  overflow: auto;
}
</style>
