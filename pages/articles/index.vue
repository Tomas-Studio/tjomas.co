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
        <!-- I express my insights on technical concepts, share updates in the SWE world, recommend resources that have helped me, share things I have learnt and still exploring as Software Engineer -->
      </p>
    </div>

    <div mt10>
      <ContentList v-slot="{ list }" :query="query">
        <div v-for="item of list" :key="item._path">
          <pre>
            {{ item }}
          </pre>
        </div>
      </ContentList>
    </div>
  </div>
</template>
