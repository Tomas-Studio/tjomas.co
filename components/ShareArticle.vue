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
    <span text-sm>Share on</span>
    <NuxtLink :to="links.shareOnX" target="_blank" p1.5 ml2>
      <div aria-hidden="true" i-line-md:twitter-x />
    </NuxtLink>
    <button
      v-tooltip.right="{ content: copytext, distance: '15', triggers: ['hover'], shown: copied }"
      ml2
      p1.5 @click="copy(links.copyLink)"
    >
      <div i-solar-link-bold />
    </button>
  </div>
</template>
