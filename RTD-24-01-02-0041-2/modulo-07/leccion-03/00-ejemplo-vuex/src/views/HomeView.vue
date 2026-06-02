<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const valor = computed(() => store.state.contador.valor)
const doble = computed(() => store.getters['contador/doble'])
const logueado = computed(() => store.getters['sesion/estaLogueado'])

const incrementar = () => {
  // mediante la funcion commit, el componente le indica a la mutation x que se ejecute
  store.commit('contador/incrementar')
}

const decrementar = () => {
  store.commit('contador/decrementar')
}

const reiniciar = () => {
  store.commit('contador/reiniciar')
}

const entrar = () => {
  store.commit('sesion/login')
}

const salir = () => {
  store.commit('sesion/logout')
}
</script>

<template>
  <section>
    <h2>Contador (sincrónico)</h2>
    <p>
      Valor: <strong>{{ valor }}</strong>
    </p>

    <p>
      Doble: <strong>{{ doble }}</strong>
    </p>

    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
    <button @click="reiniciar">reset</button>
  </section>

  <hr />

  <section>
    <h2>Sesión simulada</h2>
    <p>Estado actual: {{ logueado ? 'Logueado' : 'No logueado' }}</p>

    <button v-if="!logueado" @click="entrar">Entar</button>
    <button v-else @click="salir">Salir</button>
  </section>
</template>

<style scoped></style>
