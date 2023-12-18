<script lang="ts" setup>
const { y: scroll } = useWindowScroll()
</script>

<template>
  <header nav-w z-40 :class="scroll > 300 ? 'backdrop-blur' : ''">
    <WebLayoutHeaderContent />
  </header>
</template>
