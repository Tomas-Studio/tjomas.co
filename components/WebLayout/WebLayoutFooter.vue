<template>
  <footer>
    <div web-w my10>
      <div>
        <p text-3.25 dark:text-gray-500 text-gray-600 fc>
          <span i-solar:copyright-broken mr1 mb1px />
          {{ (new Date()).getFullYear() }} Tunji Olakunle (Tjomas)
          • Code licensed under <NuxtLink to="https://opensource.org/licenses/MIT/" target="_blank" underline ml1 hover="no-underline">
            MIT
          </NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
