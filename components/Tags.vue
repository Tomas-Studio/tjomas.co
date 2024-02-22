<script setup lang="ts">
type Props = {
  tags: Array<string>
}

defineProps<Props>()
</script>

<template>
  <div flex gap-x-3>
    <NuxtLink
      v-for="tag of tags"
      :key="tag"
      :to="`/tag/${tag}`"
      :aria-label="`Link to ${tag} tag`"
      class="px4 py1 capitalize duration-300 focus-visible:(outline-1 outline-dashed)
      [&:nth-child(3n-1)]:(bg-brand-yellow/10 text-brand-yellow hover:bg-brand-yellow/20 outline-brand-yellow)
      [&:nth-child(3n-2)]:(bg-brand-green/10 text-brand-green hover:bg-brand-green/20 outline-brand-green)
      [&:nth-child(4n-1)]:(bg-brand/10 text-brand hover:bg-brand/20 outline-brand)
      "
    >
      <p text-sm>
        {{ tag }}
      </p>
    </NuxtLink>
  </div>
</template>
