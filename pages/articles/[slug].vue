<script setup lang="ts">
const { page: article, prev, next } = useContent()
const { contentNotFound, isArticle } = useUtil()

contentNotFound(article)
const url = useRequestURL()
const publishedDate = useDateFormat(article.value.datePublished, 'MMMM DD, YYYY')

const shareLinks = computed(() => {
  const rawXLink = `https://twitter.com/intent/tweet?text=I read "${article.value.title}". Have a look it at&url=${url}&via=TunjiOlakunle`
  const shareOnX = encodeURI(rawXLink.replace(/#/g, 'No. '))
  return { shareOnX, copyLink: url.href }
})

const prevOrNext = computed(() => isArticle(next.value) ? next.value : prev.value)

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogTitle: article.value.title,
  ogDescription: article.value.description,
  twitterTitle: article.value.title,
  twitterDescription: article.value.description,
})

defineOgImage({
  component: 'OGImageArticle',
  props: {
    title: article.value.title,
    description: article.value.description,
    date: publishedDate.value,
    tags: article.value.tags,
  },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }],
})
</script>

<template>
  <div web-w pt6>
    <div mb5>
      <!-- <hr wfull bg-brand-green mb /> -->
      <ArticleTags :tags="article.tags" />
      <h1 class="font-acorn text-3xl lg:text-4xl text-balance mb1">
        {{ article.title }}
      </h1>
      <div h1px wfull bg-neutral-500 mt-4 mb-2 />
      <div mb-2 text-gray-5>
        <p fw300 mb-1>
          By <span class="fw500 text-neutral-9 dark:text-neutral-1 uppercase text-sm">{{ article.author }}</span>
        </p>
        <p text-3.75>
          <span> {{ publishedDate }}</span> •
          <span>{{ article.readingTime.text }} </span>
        </p>
      </div>
      <div class="h1px wfull bg-brand-yellow/90 mb" />
    </div>
    <article>
      <ContentRenderer :key="article._id" :value="article" class="slide-enter-content" />
    </article>
    <ExtraArticle v-if="isArticle(next) || isArticle(prev)" :article="prevOrNext" />
    <NuxtLink
      to="/articles"
      class="mt-6 bg-neutral-3/35 group dark:bg-neutral-3/10 fcc p-4 w-full"
    >
      <div class="i-typcn:arrow-back text-2xl mr-2 group-hover:text-brand-yellow" />
      <span fw600 text-lg>Back to Article</span>
    </NuxtLink>
    <div mt10 mb20>
      <div flex flex-col lg:flex-row justify-between lg:items-center lt-lg:gap-y-4>
        <ShareArticle :links="shareLinks" />
      </div>
    </div>
  </div>
</template>
