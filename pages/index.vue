<script lang="ts" setup>
// definePageMeta({ documentDriven: false })
defineOgImage({
  component: 'OGImageDefault',
  props: { title: 'Tunji Olakunle', description: 'A Software Engineer that Convert Designs to Products' },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
})
</script>

<template>
  <section>
    <HomeIntro />
    <HomeStatement />
    <HomeProject />
    <HomeArticle />
    <HomeAction />
  </section>
</template>
