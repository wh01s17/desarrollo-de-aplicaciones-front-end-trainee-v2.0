<script setup>
import CajaBusqueda from '@/components/CajaBusqueda.vue'
import TarjetaProducto from '@/components/TarjetaProducto.vue'
import { computed, ref, shallowRef } from 'vue'

const productos = shallowRef([
  { id: 1, nombre: 'Café', precio: 2000 },
  { id: 2, nombre: 'Té', precio: 1500 },
  { id: 3, nombre: 'Muffin', precio: 1200 },
])

const busqueda = ref('')
const totalFavoritos = ref(0)

const productosFiltrados = computed(() => {
  if (!busqueda.value.trim()) return productos.value

  return productos.value.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.value.trim().toLowerCase()),
  )
})

const onFavorito = () => {
  totalFavoritos.value++
}

const onEliminar = (id) => {
  productos.value = productos.value.filter((p) => p.id !== id)
}

const onActualizarPrecio = ({ id, precio }) => {
  productos.value = productos.value.map((p) => (p.id === id ? { ...p, precio } : p))
}
</script>

<template>
  <section>
    <h3>Productos</h3>

    <CajaBusqueda v-model="busqueda" placeholder="Buscar producto..." />

    <p class="text-muted">Favoritos: {{ totalFavoritos }}</p>

    <TransitionGroup name="lista" class="list-unstyled" tag="ul">
      <li v-for="producto in productosFiltrados" :key="producto.id" class="mb-2">
        <TarjetaProducto
          :producto="producto"
          @favorito="onFavorito"
          @eliminar="onEliminar"
          @actualizar-precio="onActualizarPrecio"
        >
          <small class="text-success">Disponible</small>

          <template #extra>
            <router-link :to="`/productos/${producto.id}`" class="btn btn-outline-primary">
              Ver detalle
            </router-link>
          </template>
        </TarjetaProducto>
      </li>
    </TransitionGroup>
  </section>
</template>

<style scoped>
.lista-enter-active,
.lista-leave-active {
  transition: all 0.35s ease;
}

.lista-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.lista-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.lista-leave-active {
  position: absolute;
}

.lista-move {
  transition: transform 0.35s ease;
}
</style>
