<script setup lang="ts">
import { formatDate } from '@vueuse/core'

type Props = {
  article: any | null
}

withDefaults(defineProps<Props>(), { article: null })
</script>

<template>
  <NuxtLink :aria-label="`Open this acticle on ${article.title}`" :to="article._path" class="md:w-1/2 group focus-visible:outline-none">
    <h3 class="font-acorn text-lg mb4">
      {{ article.title }}
    </h3>
    <div fyc justify-between gap-2>
      <div text-3.75 op80 dark:op60>
        <span>{{ article.readingTime.text }} </span> • <span> {{ formatDate(new Date(article.datePublished), 'MMM DD, YYYY') }}</span>
      </div>
      <div aria-hidden="true" text-lg group-focus-visible:text-brand-green group-hover:text-brand-green i-ri-arrow-right-double-line />
    </div>
  </NuxtLink>
</template>
