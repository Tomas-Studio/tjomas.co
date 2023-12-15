<script setup lang="ts">
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    op60 cursor-pointer
    hover="op100"
    type="button"
    aria-label="Toggle color scheme"
    :click="toggleMode"
  >
    <div i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone text-2xl />
  </button>
</template>
