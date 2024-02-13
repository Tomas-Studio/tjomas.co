<script setup lang="ts">
type Props = {
  tags: Array<string>
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    v-for="tag of tags"
    :key="tag"
    :to="`/tag/${tag}`"
    :aria-label="`Link to ${tag} tag`"
    class="px4 py1 rounded-md capitalize
    [&:nth-child(3n-1)]:bg-brand-yellow/10 [&:nth-child(3n-1)]:text-brand-yellow
    [&:nth-child(3n-2)]:bg-brand-green/10 [&:nth-child(3n-2)]:text-brand-green
    [&:nth-child(4n-1)]:bg-brand/10 [&:nth-child(4n-1)]:text-brand [&:nth-child(3n-1)]:hover:bg-brand-yellow/20
    [&:nth-child(4n-1)]:hover:bg-brand/20 [&:nth-child(3n-2)]:hover:bg-brand-green/20
    "
  >
    <p text-sm>
      {{ tag }}
    </p>
  </NuxtLink>
</template>
