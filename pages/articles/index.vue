<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

definePageMeta({
  documentDriven: false,
})
useHead({ title: 'Articles' })

const query: QueryBuilderParams = { path: '/articles', sort: [{ dateModified: -1, datePublished: -1 }] }
</script>

<template>
  <div web-w pt8>
    <div>
      <h1 class="font-acorn text-4xl">
        Articles
      </h1>
      <p mt1 sm:text-lg>
        Infrequent thoughts on code, SWE updates, resources, learnings and more ....
      </p>
    </div>

    <div mt10>
      <ContentList v-slot="{ list }" :query="query">
        <div v-for="item of list" :key="item._path">
          {{ item.title }}
        </div>
      </ContentList>
    </div>
  </div>
</template>
