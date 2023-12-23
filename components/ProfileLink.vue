<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'

type Props = {
  to: string
  icon: string
  name: string
}
const { to } = defineProps<Props>()

const route = useRoute()
const active = computed(() => route.fullPath.includes(to))
const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanSm = breakpoints.greater('sm')
</script>

<template>
  <div relative inline-flex>
    <NuxtLink v-tooltip.bottom="{ content: name, disabled: largerThanSm }" :to="to" :aria-label="`Go to ${name} page`" class="profile-link" :class="active ? 'text-brand' : ''">
      <div aria-hidden="true" :class="icon" sm:hidden w5 h5 z5 />
      <span lt-sm:hidden capitalize z5 v-html="name" />
      <span v-show="active" class="absolute inset-x-1 bottom-1 h-2px bg-gradient-to-r from-brand-yellow via-brand to-brand-green dark:(via-brand-dark)" />
      <!-- <span v-if="active" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-1 dark:bg-white/5 rounded-full animate-[expand_1s_ease]" :class="active ? 'h8 w8' : ''" /> -->
    </NuxtLink>
  </div>
</template>

<style>
@keyframes expand {
  0% { height: 0; width: 0; }
  100%{ height: 2rem; width: 2rem; }
}
</style>
