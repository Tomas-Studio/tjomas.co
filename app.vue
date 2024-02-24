<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import FloatingVue from 'floating-vue'

useHead({
  htmlAttrs: { lang: 'en', class: 'touch-manipulation' },
  bodyAttrs: { class: 'touch-manipulation antialiased font-sans text-gray-8 dark:text-gray-3' },
  link: [{ rel: 'icon', href: '/to-favicon.png' }],
})

useSeoMeta({
  title: 'Tunji Olakunle',
  titleTemplate: title => (title !== 'Tunji Olakunle' ? `${title} • Tunji Olakunle` : title),
  description: 'My personal website, blog, software I use and things I build',
  ogSiteName: 'Tunji Olakunle',
  ogTitle: 'Tunji Olakunle',
  twitterImage: 'https://tjomas.co/ogImage.webp',
  twitterCard: 'summary_large_image',
  twitterSite: '@TunjiOlakunle',
})

onMounted(() => {
  // disable tooltip on mobile screens
  FloatingVue.options.themes.tooltip.disabled = window.innerWidth <= 640

  // apply smooth scrolling
  // window.scrollBy({ top: 200, left: 0, behavior: 'smooth' });
})
</script>

<template>
  <AriaAnnouncer />
  <NuxtLoadingIndicator color="#0F9D58" :height="2" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
