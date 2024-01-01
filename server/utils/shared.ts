import { Buffer } from 'node:buffer'

type AuthData = {
  access_token: string
  token_type: string
  expires_in: number
}

export async function getToken(client_id: string, client_secret: string) {
  const data = await $fetch<AuthData>('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
  })
  return data.access_token
}
