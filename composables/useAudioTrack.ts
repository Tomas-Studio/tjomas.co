import type { Ref } from 'vue'

// export const usePlayer = () => useState<HTMLAudioElement | null>('audio-el', () => null)

/**
 * Control audio tag / player
 * @param el audio element
 * @returns play, isPaused
 */
export default function (el: Ref<HTMLAudioElement | null>) {
  const isPaused = useState<boolean>('is-playing', () => false)

  function play() {
    if (el.value === null)
      return

    isPaused.value = el.value!.paused
    isPaused.value ? el.value?.play() : el.value?.pause()
  }

  return {
    play,
    isPaused,
  }
}
