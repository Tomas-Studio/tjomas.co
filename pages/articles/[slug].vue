<script setup lang="ts">
import { formatDate } from '@vueuse/core'

const { page: article } = useContent()

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogTitle: article.value.title,
  ogDescription: article.value.description,
})
</script>

<template>
  <div web-w pt6>
    <div mb5>
      <div h1px w20 bg-brand-green mb />
      <h1 class="font-acorn text-3xl lg:text-4xl text-balance mb1">
        {{ article.title }}
      </h1>
      <div text-gray-5 text-3.75 mb>
        <span>{{ article.readingTime.text }} </span> • <span> {{ formatDate(new Date(article.datePublished), 'MMM DD, YYYY') }}</span>
      </div>
      <div h1px w20 bg-brand-green mb />
      <!-- <div flex gap-x-2.5 mb2>
        <Tags :tags="article.tags" />
      </div> -->
    </div>
    <ContentDoc v-slot="{ doc }">
      <article>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>
