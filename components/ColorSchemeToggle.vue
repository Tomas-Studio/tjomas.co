<script setup lang="ts">
const colorMode = useColorMode()
function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    duration-300 px3 py3.5 sm:py3
    cursor-pointer
    hover="text-brand-dark"
    focusable
    type="button"
    aria-label="Toggle color scheme"
    @click="toggleMode()"
  >
    <div i-solar:sun-outline dark:i-solar:moon-outline text-5 />
  </button>
</template>
