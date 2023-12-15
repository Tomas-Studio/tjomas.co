<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: '' },
  link: [{ rel: 'icon', href: '/images/uniport-sm.png' }],
})

useSeoMeta({
  title: 'Tunji builds stuff',
  titleTemplate: title => (title !== 'Tunji Exploring the things' ? `${title} | Tunji Olakunle` : title),
  description: 'My personal website, blog, software I use and things I build',
  ogSiteName: 'Tunji builds stuff',
  ogImage: 'https://tjomas.co/ogImage.webp',
  ogImageAlt: 'Tunji builds stuff',
  twitterImage: 'https://tjomas.co/ogImage.webp',
  twitterCard: 'summary_large_image',
  twitterSite: '@DevTjomas',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html{
  --uno: bg-white;
}
html.dark{
  --uno: bg-dark;
}
</style>
