<script lang="ts" setup>
type Props = {
  tags: Array<string>
}

defineProps<Props>()
const { page: post } = useContent()
</script>

<template>
  <div flex items-center mb-4>
    <div class="text-2.75 uppercase h-max fw700 bg-brand-yellow/70 text-neutral-9 px-2">
      {{ post.type }}
    </div>
    <div h-5 w-1px bg-neutral-3 mx-2.5 />
    <div flex gap-x-2.5>
      <NuxtLink
        v-for="tag of tags"
        :key="tag"
        :to="`/tags/${tag}`"
        :aria-label="`Link to ${tag} tag`"
        class="text-2.75 uppercase fw700 text-brand-green hover:text-gray-3 duration-300"
      >
        {{ tag }}
      </NuxtLink>
    </div>
  </div>
</template>
