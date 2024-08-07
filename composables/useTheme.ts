const colorMode = useColorMode()

/**
 * Animate color mode switch,
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export function toggleTheme(event: MouseEvent) {
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
    await nextTick()
  })

  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: colorMode.value === 'dark' ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: colorMode.value === 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)',
        },
      )
    })
}
