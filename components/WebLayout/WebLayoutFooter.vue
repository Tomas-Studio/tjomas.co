<script setup lang="ts">
const footerLinks = [
  { title: 'Email', link: '/' },
  { title: 'Github', link: '/' },
  { title: 'Twitter', link: '/' },
  { title: 'Medium', link: '/' },
  { title: 'Read.CV', link: '/' },
  { title: 'RSS', link: '/' },
]
</script>

<template>
  <footer pt10 pb10>
    <div web-w flex flex-col sm:flex-row lt-sm:gap-y-2>
      <div flex flex-col items-end sm:flex-row lt-sm:gap-y-3 gap-x-5>
        <NuxtLink
          v-for="item of footerLinks"
          :key="item.title"
          :to="item.link"
          :aria-label="`link to my ${item.title}`"
          fw500 hover:underline
          underline="1px dark/40 dark:white/50  offset-3"
          focus-visible:underline
          focus-visible:outline-none
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <div flex-auto />
      <div flex justify-end>
        <p fyc fw300>
          Copyright
          <span i-solar:copyright-outline mx1 />
          {{ (new Date).getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>
