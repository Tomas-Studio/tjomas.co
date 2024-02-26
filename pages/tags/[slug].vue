<script lang="ts" setup>
const { page: tag } = useContent()
const { contentNotFound } = useUtil()

contentNotFound(tag)

useSeoMeta({
  title: `Tag - ${tag.value.title}`,
  description: tag.value.description,
  ogTitle: `Tag - ${tag.value.title}`,
  ogDescription: tag.value.description,
  twitterTitle: `Tag - ${tag.value.title}`,
  twitterDescription: tag.value.description,
})

defineOgImage({
  component: 'OGImageDefault',
  props: {
    title: `Tag - ${tag.value.title.charAt(0).toUpperCase() + tag.value.title.substring(1)}`,
    description: `Find articles and projects that interests you under the ${tag.value.title} tag`,
  },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
})

const articles = await queryContent('articles').where({ tags: { $contains: `${tag.value.title.toLowerCase()}` } }).sort({ dateModified: -1, datePublished: -1 }).find()
</script>

<template>
  <div web-w pt6 relative>
    <NuxtLink
      v-tooltip.left="'More tags'"
      to="/tags"
      class="absolute left--20 top-5 px2 py1 focusable lt-md:hidden op50 hover:op100 duration-300"
    >
      <div text-2xl i-material-symbols:keyboard-backspace-rounded />
    </NuxtLink>
    <div>
      <h1 class="font-acorn text-4xl">
        Tag -  <span capitalize>{{ tag.title }}</span>
      </h1>
      <p mt3 sm:text-lg>
        {{ tag.description }}
      </p>
      <div h1px w20 bg-brand-green mt />
    </div>
    <div class="my8">
      <div v-if="articles.length > 0" class="slide-enter-content">
        <h2 class="uppercase text-(sm brand-yellow) fw700 tracking-wide mb6">
          Articles
        </h2>
        <ArticleCard v-for="item of articles" :key="item._path" :article="item" />
      </div>
    </div>
  </div>
</template>
