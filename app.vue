<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: '' },
  link: [{ rel: 'icon', href: '/tjomas-co.png' }],
})

useSeoMeta({
  title: 'Tunji Olakunle',
  titleTemplate: title => (title !== 'Tunji Olakunle' ? `${title} | Tunji Olakunle` : title),
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
    <NuxtLoadingIndicator color="#" />
    <NuxtPage />
  </NuxtLayout>
</template>
