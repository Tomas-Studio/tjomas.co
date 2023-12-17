<script setup lang="ts">
const colorMode = useColorMode()
function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    duration-300
    cursor-pointer
    hover="text-orange-7"
    text-inherit
    type="button"
    aria-label="Toggle color scheme"
    @click="toggleMode()"
  >
    <div i-solar:sun-outline dark:i-solar:moon-outline text-xl />
  </button>
</template>
