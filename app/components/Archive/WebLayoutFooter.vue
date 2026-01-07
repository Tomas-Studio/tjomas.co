<script setup lang="ts">
const footerLinks = [
  {
    header: 'directories',
    links: [
      { title: 'About', link: '/about', external: false },
      { title: 'Articles', link: '/articles', external: false },
      { title: 'Projects', link: '/projects', external: false },
      { title: 'Experiences', link: '/experiences', external: false },
      { title: 'RSS', link: '/about', external: true },
    ],
  },
  {
    header: 'reach me',
    links: [
      { title: 'Email', link: 'mailto:tjomas24@gmail.com?subject=Hi Tunji', external: false },
      { title: 'Twitter', link: 'https://x.com/@TunjiOlakunle', external: true },
      { title: 'LinkedIn', link: 'https://www.linkedin.com/in/olatunji-olakunle', external: true },
      // { title: 'iMessage', link: 'imessage://tjomas96@yahoo.com', external: true },
    ],
  },
]

const route = useRoute()
</script>

<template>
  <footer>
    <div web-w pt14 pb18>
      <div grid grid-cols-1 sm:grid-cols-2 gap-5>
        <div sm:col-span-1 gap-y-2>
          <WebLayoutCopyright lt-sm:hidden />
        </div>
        <div sm:col-span-1 grid grid-cols-2>
          <div v-for="item of footerLinks" :key="item.header" col-span-1>
            <h3 capitalize mb text="~ lg brand-yellow/80">
              {{ item.header }}
            </h3>
            <NuxtLink
              v-for="link of item.links"
              :key="link.link" focusable
              :to="link.link" duration-300
              :target="link.external ? '_blank' : '_self'"
              block mt3 hover="text-brand"
              :aria-label="`Go to ${link.title} Page`"
            >
              {{ link.title }}
              <span v-if="route.fullPath.includes(link.link)" h2 w2 rounded-full ml1.5 bg-brand-yellow inline-block />
            </NuxtLink>
          </div>
        </div>
      </div>
      <WebLayoutCopyright sm:hidden />
    </div>
  </footer>
</template>
