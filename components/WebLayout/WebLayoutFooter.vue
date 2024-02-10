<script setup lang="ts">
const footerLinks = [
  { title: 'Email', link: '/' },
  { title: 'Twitter', link: '/' },
  { title: 'Github', link: '/' },
  { title: 'Medium', link: '/' },
  { title: 'Read.CV', link: '/' },
  { title: 'RSS', link: '/' },
]
</script>

<template>
  <footer pt10 pb10>
    <div web-w flex flex-col sm:flex-row lt-sm:gap-y-2>
      <div flex flex-col items-end sm:flex-row lt-sm:gap-y-3 gap-x-4>
        <NuxtLink
          v-for="item of footerLinks"
          :key="item.title"
          :to="item.link"
          :aria-label="`link to ${item.title}`"
          fw500 hover:underline
          underline="1px dark/40 dark:white/50 offset-3"
          focus-visible:underline
          focus-visible:outline-none
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <div flex-auto />
      <div fyc justify-end fw300>
        <NuxtLink
          to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          hover:underline mr1
          underline="1px dark/40 dark:white/50 offset-3"
          focus-visible:underline op60 dark:op40
          focus-visible:outline-none
        >
          CC BY-NC-SA 4.0
        </NuxtLink>
        <p fyc>
          {{ (new Date).getFullYear() }}
          <span i-solar:copyright-outline mx1 />
          <span text-brand-green mr1 fw600>TO</span>
        </p>
      </div>
    </div>
  </footer>
</template>
