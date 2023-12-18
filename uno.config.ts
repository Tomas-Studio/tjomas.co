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
    'navigation': 'flex gap-x-1 sm:gap-x-2 pl2 pr1 wfull bg-white/90 dark:bg-white/0 border border-gray-3 dark:border-gray-2/10 shadow-lg shadow-gray-9/6 dark:shadow-white/2 backdrop-blur rounded-sm',
    'nav-w': 'px5 py4 sm:(px6)',
    'web-w': 'px5 wfull m-auto max-w-690px',
    'focusable': 'focus-visible:(outline-1 outline-offset-1 outline-brand outline-dashed)',
    'profile-link': 'px3 py3.5 sm:py3 fcc text-inherit hover:text-brand active:text-brand-active focusable duration-300',
    'fcc': 'flex items-center justify-center',
    'fc': 'flex items-center',
    'logo-st': 'font-logo pb1 px2 text-6 sm:text-7 text-brand dark:(text-brand-dark active:text-brand-active) focusable hover:text-brand duration-400',
  },
  theme: {
    colors: {
      dark: '#050505',
      brand: {
        DEFAULT: '#EA580C',
        dark: '#C2410C',
        active: '#9A3412',
      },
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Josefin Sans:300,400,500,600,700',
        mono: 'DM Mono',
        logo: [
          { name: 'Zen Tokyo Zoo', weights: ['400'] },
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
