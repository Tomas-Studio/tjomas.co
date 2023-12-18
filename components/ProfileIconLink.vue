<script lang="ts" setup>
type Props = {
  to: string
  icon: string
  name: string
}
defineProps<Props>()
</script>

<template>
  <div relative inline-flex lt-sm:hidden>
    <NuxtLink v-tooltip.bottom="name" :to="to" target="_blank" :aria-label="name" class="profile-link">
      <div aria-hidden="true" :class="icon" w5 h5 z5 />
    </NuxtLink>
  </div>
</template>
