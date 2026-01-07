<script lang="ts" setup>
definePageMeta({ documentDriven: false })
useHead({ title: 'About' })
defineOgImage({
  component: 'OGImageDefault',
  props: { title: 'About Me', description: 'What about Me' },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
})
</script>

<template>
  <div web-w pt8>
    <h1 class="font-acorn text-4xl">
      About Me
    </h1>
  </div>
</template>
