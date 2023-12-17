<script lang="ts" setup>
const { y: scroll } = useWindowScroll()
</script>

<template>
  <header nav-w z-2 :class="scroll > 300 ? 'backdrop-blur' : ''">
    <WebLayoutHeaderContent />
  </header>
</template>
