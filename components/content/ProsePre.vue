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
  style?: string | object | null
}

const props = withDefaults(defineProps<Props>(), { code: '', filename: null, language: '', meta: null, class: null, highlights: () => [], style: null })

const highlighter = await getHighlighter({
  themes: ['vitesse-dark', 'catppuccin-latte'],
  langs: ['css', 'js', 'vue', 'ts', 'text', 'scala'],
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

const { copy, copied } = useClipboard()
</script>

<template>
  <div relative>
    <div class="[&>pre]:(px4 pt10 pb2) focus-visible:( [&>pre]:(outline-1 outline-brand-green outline-dashed)) [&>code]:( [&>pre]:(font-mono text-sm)) border-neutral-3 dark:border-neutral-8 my8 rounded-sm" v-html="highlight" />
    <span class="absolute left-3 top-1.5 text-(3.75 neutral-5) fw500 tracking-wide">
      {{ props.filename }}
    </span>
    <button
      class="absolute right-0 top-0 p2 text-base text-neutral-4 hover:text-neutral-6 dark:text-neutral-6 dark:hover:text-neutral-4 duration-300"
      focus-visible:text-neutral-6 dark:focus-visible:text-neutral-3 focusable
      aria-label="Copy code"
      @click="copy(props.code)"
    >
      <div v-if="!copied" i-solar-copy-line-duotone />
      <div v-else i-solar-copy-bold-duotone />
    </button>
  </div>
</template>
