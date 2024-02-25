<script lang="ts" setup>
defineOgImage({
  component: 'OGImageDefault',
  props: { title: 'Tunji Olakunle', description: 'A Software Engineer that Convert Designs to Products' },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
})
</script>

<template>
  <HomeIntro />
  <HomeStatement />
  <HomeProject />
  <HomeArticle />
  <HomeAction />
</template>
