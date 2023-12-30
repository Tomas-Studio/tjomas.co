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
    'navigation2': 'flex gap-x-1 sm:gap-x-2 pl2 pr1 wfull bg-white/90 dark:bg-white/3 border border-gray-3 dark:border-gray-2/20 shadow-lg shadow-gray-9/6 dark:shadow-white/2 backdrop-blur rounded-sm',
    'navigation': 'flex gap-x-1 sm:gap-x-2 wfull mxauto ww backdrop-blur ',
    'ww': 'lt-lg:px5 max-w-6xl',
    'web-w': 'ww wfull mxauto',
    'focusable': 'focus-visible:(outline-1 outline-brand outline-dashed)',
    'profile-link': 'px3 py3.5 sm:py3 fcc text-inherit hover:text-brand active:text-brand-active focusable duration-300',
    'fcc': 'flex items-center justify-center',
    'fyc': 'flex items-center',
    'fxc': 'flex justify-center',
    'logo-st': 'font-logo fc font-italic py1 px2 text-6 sm:text-7 text-brand dark:(text-brand-dark active:text-brand-active) focusable hover:text-brand duration-400',
  },
  theme: {
    colors: {
      dark: '#050505',
      brand: {
        DEFAULT: '#4285F4',
        dark: '#3569BE',
        active: '#294F8E',
        red: '#DB4437',
        yellow: '#F4B400',
        green: '#0F9D58',
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
        sans: 'Quicksand:300,400,500,600,700',
        mono: 'DM Mono',
        logo: [
          { name: 'Merriweather', weights: ['400'], italic: true },
          { name: 'sans serif', provider: 'none' },
        ],
        secondary: [
          { name: 'Libre Baskerville', weights: ['400'] },
          { name: 'serif', provider: 'none' },
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
