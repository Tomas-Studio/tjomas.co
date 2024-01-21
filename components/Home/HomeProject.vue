<script setup lang="ts">
const projects = [
  { title: 'withGsap', desc: 'A showroom website of several animation implementations with Gsap in vue js', type: 'Website' },
  { title: 'getJson', desc: 'Import json from anywhere in your project fully Typed', type: 'Library' },
  { title: 'Northcare', desc: 'Revolutionalizing the way we do Healthcare in Africa', type: 'SAAS' },
]
</script>

<template>
  <div web-w mt30 lg:mt40>
    <div gap-8 mb10>
      <div fyc>
        <div i-ic-outline-work text-base mr1 />
        <h3 uppercase text-sm fw600 tracking-wide>
          Selected Projects
        </h3>
      </div>
    </div>
    <div>
      <NuxtLink v-for="{ title, desc, type }, idx of projects" :key="title" to="/projects" flex class="home-project group">
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
    --uno: text-3xl;
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
