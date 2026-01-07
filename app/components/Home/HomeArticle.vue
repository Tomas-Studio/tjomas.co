<script setup lang="ts">
import { formatDate } from '@vueuse/core'

const { data: articles } = await useAsyncData(`home-articles`, () => {
  return queryCollection('articles').where('featured', '=', true).all()
})
</script>

<template>
  <div block web-w mt12 lg:mt20>
    <div fyc mb10>
      <h3 uppercase text-sm fw700 tracking-wide>
        Featured Articles
      </h3>
    </div>
    <div>
      <NuxtLink v-for="post in articles" :key="post.id" :to="post.path" class="home-article" :aria-label="`go to article on ${post.title}`">
        <div fyc mb1.5 text-sm>
          <span class="a-tags">{{ post.tags.join(' • ') }}</span>
          <div border-b border-dashed w-10 border-gray-8 dark:border-gray-3 mx3 />
          <span>{{ formatDate(new Date(post.datePublished), 'MMM DD, YYYY') }}</span>
        </div>
        <h2 text-balance text-2xl>
          {{ post.title }}
        </h2>
        <span class="a-link">
          Read article
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
