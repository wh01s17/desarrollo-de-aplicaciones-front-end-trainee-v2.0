<template>
  <pre>
        {{ datos }}
    </pre
  >
</template>

<script setup>
defineProps({
  datos: {
    type: Object,
    required: true,
  },
})
</script>
