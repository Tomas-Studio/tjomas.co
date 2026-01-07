<script lang="ts" setup>
definePageMeta({ documentDriven: false })
useHead({ title: 'Projects' })
defineOgImage({
  component: 'OGImageDefault',
  props: { title: 'Projects', description: 'A bunch of project I am working on & I have worked on' },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
})
</script>

<template>
  <div web-w pt8>
    <h1 class="font-acorn text-4xl">
      Projects
    </h1>
  </div>
</template>
