<script lang="ts" setup>
definePageMeta({ documentDriven: false })
useHead({ title: 'Tags' })

defineOgImage({
  component: 'OGImageDefault',
  props: { title: 'Tags', description: 'Find articles and projects that interests you by tags' },
  fonts: ['Luckiest+Guy:400', { name: 'acorn', weight: 700, path: '/acorn.woff' }, 'Urbanist:400'],
})

const tags = await queryContent('tags').sort({ title: 1 }).find()
</script>

<template>
  <div web-w pt8>
    <h1 class="font-acorn text-4xl">
      Tags
    </h1>
    <p mt1 mb7 sm:text-lg>
      Find articles and projects that interests you by tags
    </p>
    <div class="flex flex-wrap gap-x-4">
      <NuxtLink
        v-for="tag of tags"
        :key="tag.title"
        :aria-label="`Link to ${tag.title} tag page`"
        :to="tag._path"
        class="px7 py3 font-acorn text-2xl rounded sm:text-2xl capitalize duration-300 focus-visible:(outline-1 outline-dashed)
          [&:nth-child(3n-1)]:(bg-brand-yellow/5 text-brand-yellow hover:bg-brand-yellow/15 outline-brand-yellow)
          [&:nth-child(3n-2)]:(bg-brand-green/5 text-brand-green hover:bg-brand-green/15 outline-brand-green)
          [&:nth-child(4n-1)]:(bg-brand/5 text-brand hover:bg-brand/15 outline-brand)
        "
      >
        {{ tag.title }}
      </NuxtLink>
    </div>
  </div>
</template>
