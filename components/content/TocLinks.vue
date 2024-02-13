<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'

type Props = {
  links: TocLink[]
}

defineProps<Props>()
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.text" class="mb3 block" :class="[link.depth === 3 ? 'pl3' : '']">
      <NuxtLink
        :to="`#${link.id}`"
        class="text-sm mb2 block op70 dark:op50 underline-offset-3
          underline-1px hover:(op100 underline) duration-300
          focus-visible:outline-0 focus-visible:(op100 underline)"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks v-if="link.children" :links="link.children" />
    </li>
  </ul>
</template>
