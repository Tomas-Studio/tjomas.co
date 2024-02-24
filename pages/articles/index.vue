<script lang="ts" setup>
definePageMeta({
  documentDriven: false,
})
useHead({ title: 'Articles' })

defineOgImage({
  component: 'OGImageDefault',
  props: { title: 'Articles', description: 'Infrequent thoughts on code, SWE updates, resources, my learnings and more ....' },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
})

const articles = await queryContent('articles').sort({ dateModified: -1, datePublished: -1 }).find()
</script>

<template>
  <div web-w pt8>
    <div>
      <h1 class="font-acorn text-4xl">
        Articles
      </h1>
      <p mt1 sm:text-lg>
        Infrequent thoughts on code, SWE updates, resources, my learnings and more ....
      </p>
      <div h1px w20 bg-brand-green mt />
    </div>
    <div class="mt10 slide-enter-content">
      <ArticleCard v-for="item of articles" :key="item._path" :article="item" />
    </div>
  </div>
</template>
