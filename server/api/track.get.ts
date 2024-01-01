import { getToken } from '../utils/shared'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const token = await getToken(config.spotifyClientId, config.spotifyClientSecret)

  const ids = '6pWgRkpqVfxnj3WuIcJ7WP,6ZFbXIJkuI1dVNWvzJzown,3CLSHJv5aUROAN2vfOyCOh'

  const data = await $fetch('https://api.spotify.com/v1/tracks', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { ids },
  })

  const selected = (data as any).tracks![Math.floor(Math.random() * (data as any).tracks!.length)]

  return selected
})
