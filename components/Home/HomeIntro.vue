<script setup lang="ts">
const { x, y } = useMouse()

const card = ref<HTMLDivElement | null>(null)
const { height, width } = useElementSize(card)

const cardTransform = computed(() => {
  const MAX_ROTATION = 7

  const rX = (
    MAX_ROTATION / 2 - (y.value / height.value) * MAX_ROTATION
  ).toFixed(2) // x-axis rotation

  const rY = (
    (x.value / width.value) * MAX_ROTATION - MAX_ROTATION / 2
  ).toFixed(2) // y-axis rotation

  return `perspective(${width.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
  <div web-w relative>
    <div pt12>
      <div relative>
        <div ref="card" :style="{ transform: cardTransform }" class="absolute right-0 top--5 h-100 w-120 of-hidden rounded-8 z--1 bg-neutral-3/50 dark:bg-neutral-8/50 preserve-3d transition-transform duration-250 ease-out">
          <!-- <img src="/img/mountains-2.jpg" hfull alt=""> -->
        </div>
        <div relative z-2>
          <h2 block mb2 text-lg>
            hey there!
          </h2>
          <!-- <button p4 w40 rounded-full border border-white absolute class="top-40%" left--15 >click me</button> -->
          <div class="font-acorn text-8xl flex-col gap-y-1">
            <div>I'm Tunji.</div>
            <div relative ml25 text-brand dark:text-brand-yellow>
              A <span>FrontEnd</span>
            </div>
            <div text-brand dark:text-brand-yellow>
              Engineer
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
