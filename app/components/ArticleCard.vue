<script setup lang="ts">
import { formatDate } from '@vueuse/core'

type Props = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  article: any
}

defineProps<Props>()
const loaded = ref(false)
</script>

<template>
  <div class="flex flex-col md:flex-row gap-5 mb7">
    <NuxtLink
      v-bind="article.external ? { href: article.external, target: '_blank', rel: 'noopener noreferrer' } : { to: article._path }"
      :aria-label="`Open this acticle on ${article.title}`"
      class="shrink-0 focusable"
    >
      <NuxtImg v-show="loaded" :src="article.cover" class="lt-md:w-full aspect-ratio-16/9 md:h34" @load="loaded = true" />
      <div v-show="!loaded" class="img-bg lt-md:w-full aspect-ratio-16/9 md:h-34" />
    </NuxtLink>
    <div md:pt-1>
      <div class="flex gap-3 mb-1">
        <NuxtLink
          v-for="tag of article.tags" :key="tag"
          :to="`/tags/${tag}`" :aria-label="tag"
          class="text-(xs brand-yellow/60) hover:(text-brand-yellow/80 fw700) focus-visible:(text-brand-yellow/80 fw700) outline-none duration-300 uppercase fw600"
        >
          {{ tag }}
        </NuxtLink>
      </div>
      <NuxtLink
        v-bind="article.external ? { href: article.external, target: '_blank', rel: 'noopener noreferrer' } : { to: article._path }"
        :aria-label="`Open this acticle on ${article.title}`"
        class="group focus-visible:outline-none"
      >
        <h2 class="font-acorn text-(2xl balance) group-hover:text-brand-green group-focus-visible:text-brand-green duration-300">
          {{ article.title }} <span v-if="article.external" inline-block relative mb--1 ml2 h5 i-line-md-external-link-rounded />
        </h2>
      </NuxtLink>
      <div flex flex-col-reverse lt-sm:gap-y-3 sm:flex-row justify-between>
        <div class="fyc text-(sm gray-5)">
          <span mr1 fw600 text-3.75>{{ formatDate(new Date(article.datePublished), 'MMMM DD, YYYY') }} </span>
          <span fw700>•</span> <span ml1>{{ article.readingTime.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
