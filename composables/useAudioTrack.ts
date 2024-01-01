// import type { Ref } from 'vue'

export const usePlayer = () => useState<HTMLAudioElement | null>('audio-el', () => null)

/**
 * Control audio tag / player
 * @param audioEl audio element
 * @returns play, isPaused
 */
export default function () {
  const el = usePlayer()
  const isPaused = useState<boolean>('is-playing', () => false)

  function play() {
    // console.log(el.value);

    isPaused.value = el.value!.paused
    isPaused.value ? el.value?.play() : el.value?.pause()
  }

  return {
    play,
    isPaused,
  }
}
