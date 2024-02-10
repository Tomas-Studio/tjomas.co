<script setup lang="ts">
type Props = {
  href: string
  target?: string
}

withDefaults(defineProps<Props>(), { href: '', target: undefined })
</script>

<template>
  <NuxtLink
    class="underline underline-1px underline-offset-3 dark:underline-gray-3/30 dark:hover:underline-gray-3/70 focus-visible:outline-none focus-visible:dark:underline-gray-3/70 focus-visible:underline-gray-8/70 underline-gray-8/20 hover:underline-gray-8/70"
    :href="href"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
