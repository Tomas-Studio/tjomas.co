<script lang="ts" setup>
const route = useRoute()

const goBack = computed(() => {
  const path = route.fullPath.split('/')
  path.pop()
  return `/${path.join('/')}`
})
</script>

<template>
  <div v-if="route.path !== '/'" web-w fyc text-gray-5>
    <div class="i-bx:chevron-right h5 w5 -ml1.5" />
    <NuxtLink :to="goBack" ml1 underline underline-offset-3 focusable hover="no-underline">
      cd  . .
    </NuxtLink>
  </div>
</template>
