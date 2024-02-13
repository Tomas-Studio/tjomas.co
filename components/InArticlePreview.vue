<script setup lang="ts">
import { formatDate } from '@vueuse/core'

type Props = {
  article: any | null
}

withDefaults(defineProps<Props>(), { article: null })
</script>

<template>
  <NuxtLink :to="article._path" class="md:w-1/2 group">
    <h3 class="font-acorn text-lg mb4">
      {{ article.title }}
    </h3>
    <div fyc gap-3>
      <div text-3.75 op80 dark:op60>
        <span>{{ article.readingTime.text }} </span> • <span> {{ formatDate(new Date(article.datePublished), 'MMM DD, YYYY') }}</span>
      </div>
      <div group-hover:bg-brand-yellow h1px flex-1 bg-gray-5 duration-300 />
    </div>
  </NuxtLink>
</template>
