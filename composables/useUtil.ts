import type { Ref } from 'vue'

/**
 * Utility functions
 * @returns
 */
export default function () {
  function contentNotFound(page: Ref<any>) {
    if (page.value)
      return

    if (process.server) {
      const event = useRequestEvent()
      setResponseStatus(event, 404, 'Article not Found')
    }

    throw createError({ fatal: true, statusCode: 404 })
  }

  return { contentNotFound }
}
