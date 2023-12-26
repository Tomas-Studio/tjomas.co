<template>
  <div web-w relative>
    <svg class="absolute inset-x-0 top-0 -z-10 h-38rem w-full stroke-brand-yellow/20 dark:stroke-brand-yellow/15 [mask-image:radial-gradient(19rem_19rem_at_center,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="box" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-brand-green/30 dark:fill-brand-green/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#box)" />
    </svg>
    <div pt10 grid grid-cols-1 lg:grid-cols-2 gap-10>
      <div lg:col-span-1 pt10>
        <p text-4xl class="font-acorn">
          Hi. I'm <span text-brand-green>Tunji</span>. <br>
          A Software Engineer.
        </p>
        <p mt2>
          Currently, I am a Frontend Team Lead at CypherCrescent, I love bringing designs & ideas to live on the browser
        </p>
        <p mt2>
          I focus on building maintainable, accessible & user-focused interfaces
        </p>
      </div>
      <div lg:col-span-1 fxc>
        <!-- to be decided what to have here -->
        <!-- <div bg-brand-green>
          <div h100 of-hidden class="rounded-tl-xl rounded-br-full" >
            <NuxtImg
              src="/img/profile-image.webp"
              format="webp"
              alt="Tunji Olakunle's profile image"
              h-inherit object-cover
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
