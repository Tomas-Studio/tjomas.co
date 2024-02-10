<script setup lang="ts">
import { getHighlighter } from 'shiki'
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers'

type Props = {
  code: string
  language: string
  filename: string | null
  meta: string | null
  class: string | null
  highlights?: () => Array<number>
  style: string | object | null
}

const props = withDefaults(defineProps<Props>(), { code: '', filename: null, language: '', meta: null, class: null, highlights: () => [], style: null })

const highlighter = await getHighlighter({
  themes: ['vitesse-dark', 'catppuccin-latte'],
  langs: ['css', 'js', 'vue', 'ts'],
})

const highlight = computed(() => {
  return highlighter.codeToHtml(props.code, {
    lang: props.language,
    themes: {
      light: 'catppuccin-latte',
      dark: 'vitesse-dark',
    },
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
    ],
  })
})
</script>

<template>
  <div relative>
    <div class="[&>pre]:(px4 pt10 pb2) [&>code]:( [&>pre]:(font-mono text-3.75)) border border-neutral-3 dark:border-neutral-8 my8" v-html="highlight" />
    <span class="absolute left-3 top-1.5 text-(3.75 gray-5) fw500 tracking-wide">
      {{ props.filename }}
    </span>
  </div>
</template>
