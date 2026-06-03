<script setup>
import { useContadorStore } from '@/stores/contadorStore'
import { useSesionStore } from '@/stores/sesionStore'

const contadorStore = useContadorStore()
const sesionStore = useSesionStore()
</script>

<template>
  <section>
    <h2>Contador</h2>
    <p>
      Valor: <b>{{ contadorStore.valor }}</b>
    </p>

    <p>
      Doble (getter): <b>{{ contadorStore.doble }}</b>
    </p>

    <button @click="contadorStore.incrementar()">+</button>
    <button @click="contadorStore.decrementar()">-</button>
    <button @click="contadorStore.reiniciar()">Reiniciar</button>
  </section>

  <hr />

  <section>
    <h2>Sesion simulada</h2>
    <p>
      Estado actual: <b>{{ sesionStore.estaLogueado ? 'Logueado' : 'No logueado' }}</b>
    </p>

    <button v-if="!sesionStore.estaLogueado" @click="sesionStore.entrar()">Entrar</button>
    <button v-else @click="sesionStore.salir()">Salir</button>
  </section>
</template>
