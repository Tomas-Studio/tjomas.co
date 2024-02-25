<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({ error: Object as () => NuxtError })
useHead({
  title: `${props.error!.statusCode} • ${props.error?.statusMessage}`,
  htmlAttrs: { lang: 'en', class: 'touch-manipulation' },
  bodyAttrs: { class: 'touch-manipulation antialiased font-sans text-gray-8 dark:text-gray-3' },
  link: [{ rel: 'icon', href: '/to-favicon.png' }],
})
</script>

<template>
  <NuxtLayout name="default">
    <div web-w pt20 flex="~ col">
      <h1 class="font-acorn text-7xl md:text-8xl">
        {{ error?.statusCode }}
      </h1>
      <p text-lg>
        Whoops! Looks like the page you're looking for does not exist
      </p>
      <NuxtLink
        to="/"
        class="font-acorn wmax mt10 px5 py2 bg-brand-green .
          hover:bg-brand-green/80 active:bg-brand-green/70
          focusable duration-300"
        aria-label="Go to homepage"
      >
        Go back Home
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
