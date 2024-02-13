<script setup lang="ts">
type Props = {
  href: string
  target?: string
}

withDefaults(defineProps<Props>(), { href: '', target: undefined })
</script>

<template>
  <NuxtLink
    class="fw500 underline underline-1px underline-offset-3 underline-brand-green/50 hover:underline-brand-green focus-visible:(outline-none underline-1.5px underline-brand-green)"
    :href="href"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
