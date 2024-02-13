<script setup lang="ts">
import { formatDate } from '@vueuse/core'

const { page: article, prev, next } = useContent()
const { contentNotFound } = useUtil()

contentNotFound(article)

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
    </div>
    <ContentDoc v-slot="{ doc }">
      <article>
        <ContentRenderer :value="doc" class="slide-enter-content" />
      </article>
    </ContentDoc>
    <div mt12>
      <div fyc justify-between>
        <div flex gap-x-3>
          <Tags :tags="article.tags" />
        </div>
        <div>
          Share on
        </div>
      </div>

      <hr class="bg-brand-yellow/70 mt10 mb6 h0.5px border-0">
      <div>
        <span text-lg>More Articles</span>
        <div w-full mt5 flex flex-col md:flex-row justify-between lt-md:gap-y-8 md:gap-x-5>
          <InArticlePreview v-if="prev" :article="prev" />
          <div v-if="prev && next" class="md:mx4 lt-md:h1px md:w1px bg-brand-yellow/70" />
          <InArticlePreview v-if="next" :article="next" />
          <!-- <pre>{{ next }}</pre> -->
        </div>
      </div>
    </div>
  </div>
</template>
