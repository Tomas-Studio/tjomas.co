<script setup lang="ts">
const projects = [
  { title: 'withGsap', desc: 'A showroom website of several animation implementations with Gsap in vue js', type: 'Website', wip: false },
  { title: 'getJson', desc: 'Import json from anywhere in your project fully Typed', type: 'Library', wip: false },
  { title: 'Northcare', desc: 'Revolutionalizing the way we do Healthcare in Africa', type: 'SAAS', wip: true },
]
</script>

<template>
  <div web-w mt20 lg:mt30>
    <div fyc mb10>
      <!-- <div i-ic-outline-work text-base mr1 /> -->
      <h3 uppercase text-sm fw700 tracking-wide>
        Featured Projects
      </h3>
    </div>
    <div>
      <NuxtLink v-for="{ title, desc, type, wip }, idx of projects" :key="title" to="/projects" flex class="home-project group">
        <div class="absolute z--1 top-0 right-0 font-acorn">
          <span text="~ 6xl gray-4/30 dark:gray-8/30">{{ `0${idx + 1}` }}</span>
        </div>
        <div flex="~ 2/5 col" relative z-2>
          <div fyc>
            <h3 class="font-acorn p-title group-focus-visible:underline underline-offset-3">
              {{ title }}
            </h3>
            <div class="p-type ml4 px3 py0.5 rounded-md bg-brand-yellow/10">
              <p text-xs>
                {{ type }}
              </p>
            </div>
            <div v-if="wip" v-tooltip.right="'Work in Progress'" class="ml4 px3 py0.5 rounded-md bg-dark/5 dark:bg-white/5">
              <p text-xs>
                WIP
              </p>
            </div>
          </div>
          <p mt1>
            {{ desc }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.home-project {
  --uno: relative mb12 focus-visible:outline-none;
  & .p-title {
    --uno: text-2xl;
  }
}
.home-project:nth-child(3n-2) {
  & .p-title {
    --uno: text-brand-yellow;
  }
  & .p-type {
    --uno: bg-brand-yellow/10 [&>p]:text-brand-yellow;
  }
}
.home-project:nth-child(3n-1) {
  & .p-title {
    --uno: text-brand;
  }
  & .p-type {
    --uno: bg-brand/10 [&>p]:text-brand;
  }
}
.home-project:nth-child(4n-1) {
  & .p-title {
    --uno: text-brand-green;
  }
  & .p-type {
    --uno: bg-brand-green/10 [&>p]:text-brand-green;
  }
}
</style>
