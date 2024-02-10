<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>

<template>
  <h2 :id="id" class="font-acorn text-2xl mt8 mb4">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      focus-visible:outline-none focus-visible:underline
      underline-1px underline-offset-3
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
