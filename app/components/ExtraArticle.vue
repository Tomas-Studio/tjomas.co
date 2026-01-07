<script lang="ts" setup>
type Props = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  article: any | null
}

withDefaults(defineProps<Props>(), { article: null })
</script>

<template>
  <NuxtLink
    :aria-label="`Open this acticle on ${article.title}`"
    :to="article._path"
    class="mt10 bg-neutral-3/35 group dark:bg-neutral-3/10 flex flex-col lg:flex-row px-4 py-4 w-full"
  >
    <h2 class="font-italic shrink-0 font-acorn text-xl lg:mr4 underline text-brand-green group-hover:underline-brand-yellow underline-neutral-9 dark:underline-gray-3 underline-3 underline-offset-6">
      Next Post
    </h2>
    <h3 class="fw600 text-lg lt-lg:mt-2">
      {{ article.title }}
    </h3>
  </NuxtLink>
</template>
