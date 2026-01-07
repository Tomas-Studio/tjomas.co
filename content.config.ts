import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        datePublished: z.string(),
        author: z.string(),
        type: z.string(),
        showToc: z.boolean(),
        featured: z.boolean(),
      }),
    }),
    tags: defineCollection({
      type: 'page',
      source: 'tags/*.md',
    }),
  },
})
