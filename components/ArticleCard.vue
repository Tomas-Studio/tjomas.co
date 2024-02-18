<script setup lang="ts">
import { formatDate } from '@vueuse/core'

type Props = {
  article: any
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="article._path" :aria-label="`Open this acticle on ${article.title}`" class="block mb6 group">
    <div>
      <h2 class="font-acorn text-(xl balance) group-hover:text-black dark:group-hover:text-white duration-300">
        {{ article.title }}
      </h2>
      <div flex flex-col-reverse lt-sm:gap-y-3 sm:flex-row justify-between>
        <div class="fyc text-(sm gray-5)">
          <span mr1 fw600 text-3.75>{{ formatDate(new Date(article.datePublished), 'MMM DD, YYYY') }} </span> <span fw700>•</span> <span ml1>{{ article.readingTime.text }}</span>
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
