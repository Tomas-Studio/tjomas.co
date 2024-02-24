<script setup lang="ts">
const { page: article, prev, next } = useContent()
const { contentNotFound } = useUtil()

contentNotFound(article)
const url = useRequestURL()
const publishedDate = useDateFormat(article.datePublished, 'MMM DD, YYYY')

const shareLinks = computed(() => {
  const rawXLink = `https://twitter.com/intent/tweet?text=I read "${article.value.title}". Have a look it at&url=${url}&via=TunjiOlakunle`
  const shareOnX = encodeURI(rawXLink.replace(/#/g, 'No. '))
  return { shareOnX, copyLink: url.href }
})

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
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
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
        <span>{{ article.readingTime.text }} </span> •
        <span> {{ publishedDate }}</span>
      </div>
      <div h1px w20 bg-brand-green mb />
    </div>
    <ContentDoc v-slot="{ doc }">
      <article>
        <ContentRenderer :value="doc" class="slide-enter-content" />
      </article>
    </ContentDoc>
    <div mt12 mb20>
      <hr class="bg-brand-green/70 my10 h0.5px border-0">
      <div flex flex-col lg:flex-row justify-between lg:items-center lt-lg:gap-y-4>
        <Tags :tags="article.tags" />
        <ShareArticle :links="shareLinks" />
      </div>
      <hr class="bg-brand-green/70 mt10 mb6 h0.5px border-0">
      <div>
        <span>More Articles</span>
        <div w-full mt5 flex flex-col md:flex-row justify-between lt-md:gap-y-8 md:gap-x-5>
          <InArticlePreview v-if="prev" :article="prev" />
          <div v-if="prev && next" class="md:mx4 lt-md:h1px md:w1px bg-brand-green/70" />
          <InArticlePreview v-if="next" :article="next" />
        </div>
      </div>
    </div>
  </div>
</template>
