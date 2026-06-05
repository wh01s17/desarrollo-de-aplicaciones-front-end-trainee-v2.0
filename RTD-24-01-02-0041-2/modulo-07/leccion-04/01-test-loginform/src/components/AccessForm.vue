<script setup>
import { ref, computed } from 'vue'

// Declaramos el evento que este componente puede emitir hacia el padre
const emit = defineEmits(['submit'])

// Estados reactivos del formulario
const email = ref('')
const accessCode = ref('')

// validación con expresión regular, del formato de email
// algo@algo.algo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// computed, que se recalcula cada vez que cambian sus dependencias, en este caso, email
const isEmailValid = computed(() => emailRegex.test(email.value.trim()))

const showEmailError = computed(() => email.value.length > 0 && !isEmailValid.value)

const isFormValid = computed(() => isEmailValid.value && accessCode.value.trim().length > 0)

// Accion de envío
function onSubmit() {
  if (!isFormValid.value) return

  // emitimos el payload hacia el componente padre
  emit('submit', {
    email: email.value.trim(),
    accessCode: accessCode.value,
  })

  accessCode.value = ''
}
</script>

<template>
  <form data-testid="access-form" @submit.prevent="onSubmit">
    <div class="field">
      <label for="email">Email</label>
      <input
        id="email"
        data-testid="email-input"
        type="email"
        v-model="email"
        aria-describedby="email-error"
      />
    </div>

    <p v-if="showEmailError" id="email-error" data-testid="email-error" role="alert" class="error">
      El email no tiene un formato válido.
    </p>

    <div class="field">
      <label for="access-code">Código de acceso</label>
      <input
        id="access-code"
        data-testid="access-code-input"
        type="password"
        v-model="accessCode"
      />
    </div>

    <button data-testid="submit-button" type="submit" :disabled="!isFormValid">
      Solicitar acceso
    </button>
  </form>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.error {
  color: #c0392b;
  margin: 0 0 1rem;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
