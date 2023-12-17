<script lang="ts" setup>
type Props = {
  to: string
  icon: string
  name: string
}
defineProps<Props>()

const route = useRoute()
</script>

<template>
  <div relative inline-flex>
    <NuxtLink :to="to" :aria-label="name" class="profile-link" :class="[route.fullPath.includes(to) ? 'text-brand' : '']">
      <div aria-hidden="true" :class="icon" sm:hidden w5 h5 z5 />
      <span lt-sm:hidden fw300 text-3.75 z5 v-html="name" />
      <span v-show="route.fullPath.includes(to)" class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-brand/0 via-brand to-brand/0 dark:(via-brand-dark)" />
      <span v-show="route.fullPath.includes(to)" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h8 w8 bg-gray-1 dark:bg-white/5 rounded-full" />
    </NuxtLink>
  </div>
</template>
