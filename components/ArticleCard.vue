<script setup lang="ts">
import { formatDate } from '@vueuse/core'

type Props = {
  article: any
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    v-bind="article.external ? { href: article.external, target: '_blank', rel: 'noopener noreferrer' } : { to: article._path }"
    :aria-label="`Open this acticle on ${article.title}`"
    class="block mb6 group focus-visible:outline-none"
  >
    <div>
      <h2 class="font-acorn text-(xl balance) group-hover:text-brand-green group-focus-visible:text-brand-green duration-300">
        {{ article.title }} <span v-if="article.external" inline-block relative mb--1 ml2 h5 i-line-md-external-link-rounded />
      </h2>
      <div flex flex-col-reverse lt-sm:gap-y-3 sm:flex-row justify-between>
        <div class="fyc text-(sm gray-5)">
          <span mr1 fw600 text-3.75>{{ formatDate(new Date(article.datePublished), 'MMMM DD, YYYY') }} </span>
          <span fw700>•</span> <span ml1>{{ article.readingTime.text }}</span>
        </div>
        <div fyc gap-x-2.5>
          <div i-solar-tag-horizontal-line-duotone text-sm />
          <p v-for="tag of article.tags" :key="tag" class="text-(sm brand-green/50) capitalize fw500">
            {{ tag }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
