import type { Ref } from 'vue'
import type { ParsedContent } from '@nuxt/content'

// eslint-disable-next-line jsdoc/require-returns-check
/**
 * Utility functions
 * @returns contentNotFound
 * @returns isArticle
 */
export default function () {
  function contentNotFound(page: Ref<any>) {
    if (page.value)
      return

    if (import.meta.server) {
      const event = useRequestEvent()
      setResponseStatus(event!, 404, 'Article not Found')
    }

    throw createError({ fatal: true, statusCode: 404 })
  }

  function isArticle(
    entry?: Omit<ParsedContent, 'body'> | null | undefined,
  ): boolean {
    return Boolean(entry?._path?.startsWith('/articles/'))
  }

  return { contentNotFound, isArticle }
}
