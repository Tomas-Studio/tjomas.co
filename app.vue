<script lang="ts" setup>
import '@master/normal.css'

const CSSProvider = defineAsyncComponent(async () => (await import('@master/css.vue')).CSSProvider)
</script>

<template>
  <CSSProvider :config="import('./master.css')">
    <div>
      <h1 class="f:40 fg:red-54">
        Hello World
      </h1>
    </div>
  </CSSProvider>
</template>
