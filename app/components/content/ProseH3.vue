<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>

<template>
  <h3 :id="id" class="font-acorn text-xl mt8 mb4">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      focus-visible:outline-none focus-visible:underline
      underline-1px underline-offset-3
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
