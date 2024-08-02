<template>
  <div class="absolute inset-0 w-screen h-screen background-gradient">
    <div class="h-30dvh w-full absolute bottom-0 left-0 bg-gradient-to-b from from-white/0 to-white dark:(from-dark/0 to-dark)" />
  </div>
</template>

<style scoped>
.background-gradient {
  background-repeat: no-repeat;
  background-image: radial-gradient(circle 800px at 700px 200px, rgba(66,133,244,0.05), transparent),
    radial-gradient(circle 600px at calc(100% - 300px) 300px, rgba(15,157,88, 0.05), transparent),
    radial-gradient(circle 800px at right center, rgba(244,180,0, 0.05), transparent),
    radial-gradient(circle 800px at right bottom, rgba(41,79,142,0.05), transparent),
    radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), rgba(15,157,88, 0.05), rgba(15,157,88, 0.05), transparent)
}
</style>
