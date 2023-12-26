<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import FloatingVue from 'floating-vue'

useHead({
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: '' },
  link: [{ rel: 'icon', href: '/to-fav.png' }],
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

onMounted(() => {
  // disable tooltip on mobile screens
  FloatingVue.options.themes.tooltip.disabled = window.innerWidth <= 640
})
</script>

<template>
  <AriaAnnouncer />
  <NuxtLoadingIndicator color="#0F9D58" :height="2" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
