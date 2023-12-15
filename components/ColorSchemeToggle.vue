<script setup lang="ts">
const colorMode = useColorMode()
function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    op70 duration-300
    cursor-pointer
    hover="op100"
    text-inherit
    type="button"
    aria-label="Toggle color scheme"
    @click="toggleMode()"
  >
    <div i-ph-sun-dim-duotone dark:i-ph-moon-duotone text-2xl />
  </button>
</template>
