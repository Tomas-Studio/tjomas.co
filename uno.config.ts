import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'
import extractorMdc from '@unocss/extractor-mdc'

export default defineConfig({
  shortcuts: {
    'navigation': 'flex px4 wfull bg-white/90 dark:bg-white/0 border border-gray-3 dark:border-gray-2/10 shadow-lg shadow-gray-9/6 dark:shadow-white/2 backdrop-blur rounded-xl',
    'nav-w': 'px5 py4 sm:(px6 py3)',
    'web-w': '',
    'logo-st': 'font-logo py1 text-6 sm:text-7 text-orange-6 dark:(text-orange-7 active:text-orange-8) hover:text-orange-6 duration-400',
  },
  theme: {
    colors: {
      dark: '#050505',
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:300,400,500,600,700',
        mono: 'DM Mono',
        logo: [
          { name: 'Sacramento', weights: ['400'] },
          { name: 'cursive', provider: 'none' },
        ],
      },
    }),
    presetTypography(),
  ],
  extractors: [
    extractorMdc(),
  ],
  content: {
    filesystem: [
      './content/**/*.md',
    ],
  },
  transformers: [
    transformerDirectives(),
  ],
})
