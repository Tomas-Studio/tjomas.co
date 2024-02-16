<script setup lang="ts">
import { joinURL, withLeadingSlash, withTrailingSlash } from 'ufo'

type Props = {
  src: string
  alt: string
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), { src: '', alt: '', width: undefined, height: undefined })
const loaded = ref(false)

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base))
      return joinURL(_base, props.src)
  }
  return props.src
})
</script>

<template>
  <figure py6>
    <NuxtImg v-show="loaded" :src="refinedSrc" :alt="props.alt" :width="props.width" :height="props.height" @load="loaded = true" />
    <div v-show="!loaded" class="aspect-ratio-16/9 w-full h27em bg-neutral-9 grid place-items-center rounded-sm">
      <div text-4xl text-neutral-7 i-svg-spinners-3-dots-fade />
    </div>
    <figcaption class="text-(center 3.75 gray-5) fw400 mt2">
      {{ props.alt }}
    </figcaption>
  </figure>
</template>
