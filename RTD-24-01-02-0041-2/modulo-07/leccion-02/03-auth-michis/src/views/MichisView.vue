<script setup>
import { useCollection, useCurrentUser } from 'vuefire'

import { collection, doc, addDoc, serverTimestamp, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { ref } from 'vue'

// michiDB es la coleccion de firestore
const michiDB = collection(db, 'michis')

// michis es un array reactivo , SIEMPRE sincronizado con Firestore
const michis = useCollection(michiDB)

// Usuario logueado actual
const user = useCurrentUser()

const nombre = ref('')
const superpoder = ref('')
const editandoId = ref(null)
const error = ref(null)

const guardarMichi = async () => {
  try {
    error.value = null

    if (editandoId.value) {
      // Actualizar
      const michiDoc = doc(db, 'michis', editandoId.value)
      await updateDoc(michiDoc, {
        nombre: nombre.value,
        superpoder: superpoder.value,
      })
    } else {
      // Crear
      await addDoc(michiDB, {
        nombre: nombre.value,
        superpoder: superpoder.value,
        ownerId: user.value.uid,
        createdAt: serverTimestamp(),
      })
    }

    limpiarFormulario()
  } catch (err) {
    console.log(err)
    error.value = 'No se pudo guardar el michi. Revisa tu conexión'
  }
}

const limpiarFormulario = () => {
  nombre.value = ''
  superpoder.value = ''
  editandoId.value = null
}

const eliminarMichi = async (id) => {
  try {
    error.value = null
    const michiDoc = doc(db, 'michis', id)

    await deleteDoc(michiDoc)
  } catch (err) {
    console.log(err)
    error.value = 'No se pudo eliminar el michi. Revisa tu conexión'
  }
}

const editarMichi = (michi) => {
  editandoId.value = michi.id
  nombre.value = michi.nombre
  superpoder.value = michi.superpoder
}
</script>

<template>
  <main class="container py-4 app">
    <h1>🐱 Catálogo de Michis</h1>

    <!-- Error -->
    <div v-if="error" class="alert alert-danger mt-4">
      {{ error }}
    </div>

    <form class="row g-2 my-3" @submit.prevent="guardarMichi">
      <div class="col">
        <input type="text" placeholder="Nombre del michi" class="form-control" v-model="nombre" />
      </div>
      <div class="col">
        <input type="text" placeholder="Superpoder" class="form-control" v-model="superpoder" />
      </div>

      <div class="col-auto">
        <button type="submit" class="btn btn-success">
          {{ editandoId ? 'Guardar cambios' : 'Agregar' }}
        </button>

        <button
          type="button"
          class="btn btn-outline-secondary ms-1"
          v-if="editandoId"
          @click="limpiarFormulario"
        >
          Cancelar
        </button>
      </div>
    </form>

    <ul class="list-group">
      <li
        v-for="michi in michis"
        :key="michi.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          >{{ michi.nombre }} <em class="text-muted">- {{ michi.superpoder }}</em></span
        >

        <span>
          <button class="btn btn-sm btn-outline-primary" @click="editarMichi(michi)">
            ✏️ Editar
          </button>
          <button class="btn btn-sm btn-outline-danger ms-1" @click="eliminarMichi(michi.id)">
            🗑️ Eliminar
          </button>
        </span>
      </li>
    </ul>

    <p v-if="michis.length === 0" class="text-center text-muted mt-4">
      Todavía no hay michis, agrega el primero! 🐾
    </p>
  </main>
</template>

<style scoped>
.app {
  max-width: 640px;
}
</style>
