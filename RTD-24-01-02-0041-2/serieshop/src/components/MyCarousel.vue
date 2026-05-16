<script scoped>
import { ref, computed } from 'vue'
import { animate, stagger } from 'animejs'

const slides = ref([])
const currentIndex = ref(0)
const loading = ref(true)
const error = ref(null)
const currentSlide = computed(() => slides.value[currentIndex.value])
</script>

<template><div></div></template>

<style scoped></style>
