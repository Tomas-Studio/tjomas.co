<script setup lang="ts">
const list = ['Nuxt', 'Scala', 'Optimization']
</script>

<template>
  <div block web-w mt12 lg:mt20>
    <div fyc mb10>
      <!-- <div i-ic-baseline-edit text-base mr1 /> -->
      <h3 uppercase text-sm fw700 tracking-wide>
        Featured Articles
      </h3>
    </div>
    <div>
      <NuxtLink v-for="count in 3" :key="count" to="/articles" class="home-article" aria-label="go to article on ">
        <div fyc mb1.5 text-sm>
          <span class="a-tags">{{ list.join(' • ') }}</span>
          <div border-b border-dashed w-10 border-gray-8 dark:border-gray-3 mx3 />
          <span>Jan 20, 2030</span>
        </div>
        <h2 text-2xl>
          Digital discoveries: how VR is reshaping the travel industry
        </h2>
        <span class="a-link">
          Continue reading
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.home-article {
  --uno: mb12 block;
  & .a-tags {
    --uno: block fw500 uppercase text-xs tracking-tight;
  }

  & .a-link {
  --uno: inline-block mt4 wmax relative py2;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  &:before, &:after {
    --uno: content-[''] absolute bottom-1 border-b-3;
    --uno: transition-transform duration-400 rounded-full;
  }

  &:before {
    --uno: w6 origin-left;
  }
  &:after {
    --uno: w90% left-4 origin-left translate-x-110%;
  }
}
  &:hover .a-link:before {
    --uno: scale-x-[0.4];
  }
  &:hover .a-link:after {
    --uno: translate-x-0;
  }

  &:focus-visible {
    --uno: outline-none;
  }

  &:focus-visible .a-link:before {
    --uno: scale-x-[0.4];
  }
  &:focus-visible .a-link:after {
    --uno: translate-x-0;
  }
}
.home-article:nth-child(3n-2) {

  & .a-tags {
    --uno: text-brand-green;
  }

  & .a-link {
    &:before, &:after {
      --uno: border-brand-green;
    }
  }
}
.home-article:nth-child(3n-1) {

  & .a-tags {
    --uno: text-brand-yellow;
  }

  & .a-link {
    &:before, &:after {
      --uno: border-brand-yellow;
    }
  }
}
.home-article:nth-child(4n-1) {

  & .a-tags {
    --uno: text-brand;
  }

  & .a-link {
    &:before, &:after {
      --uno: border-brand;
    }
  }
}
</style>
