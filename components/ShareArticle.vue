<script setup lang="ts">
type Props = {
  links: {
    shareOnX: string
    copyLink: string
  }
}

defineProps<Props>()
const { copy, copied } = useClipboard()

const copytext = computed(() => {
  return !copied.value ? 'Copy link' : 'Copied'
})
</script>

<template>
  <div fyc>
    <span>Share on</span>
    <NuxtLink :to="links.shareOnX" target="_blank" p1.5 ml2 focusable aria-label="share this article on X">
      <div aria-hidden="true" i-line-md:twitter-x />
    </NuxtLink>
    <button
      v-tooltip.right="{ content: copytext, distance: '10', triggers: ['hover'], shown: copied }"
      ml2 p1.5 focusable
      aria-label="copy this article link"
      @click="copy(links.copyLink)"
    >
      <div aria-hidden="true" i-solar-link-bold />
    </button>
  </div>
</template>
