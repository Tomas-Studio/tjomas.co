import type { Ref } from 'vue'
import type { ParsedContentv2 } from '@nuxt/content'

/**
 * Utility functions
 * @returns contentNotFound
 * @returns isArticle
 */
export default function () {
  /* eslint-disable @typescript-eslint/no-explicit-any */
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
    entry?: ParsedContentv2 | null | undefined,
  ): boolean {
    return Boolean(entry?._path?.startsWith('/articles/'))
  }

  return { contentNotFound, isArticle }
}
