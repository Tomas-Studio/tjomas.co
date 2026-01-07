<template>
  <div class="h-90 w-full aspect-ratio-16/10 bg-brand/15 flex border-2 border-brand rounded-sm relative of-hidden z-10">
    <div class="screen-image" />
    <div class="screen-overlay" />
  </div>
  <!-- <div>
        <h1 text-4xl mb1 class="font-acorn">
          Hi, I'm <span> Tunji Olakunle</span>,
        </h1>
        <p>
          A Software Engineer, currently working at CypherCrescent.
        </p>
        <p mt2>
          I love bringing ideas to live and my focus is building maintainable, accessible & user-focused interfaces. I am currently working on some side projects (might lead to a startup)
        </p>
      </div> -->

  <!-- <div h16 w16 rounded-full of-hidden mb>
        <img src="/img/profile-image.webp" alt="a profile image of Tunji Olakunle" object-scale-down scale-190 object-left relative ml--3>
      </div>
      <div>
        <h1 class="text-4xl">
          <span block mb2>Tjomas</span>
          <span block fw600 text-brand>Code Matrix</span>
        </h1>
      </div> -->
</template>

<style>
.screen-overlay {
  --uno: wfull hfull absolute z-2 left-0 top-0;
  background-size: 100% 9px;
  animation: pan-overlay 22s infinite linear;
  background-image: linear-gradient(
    rgba(15, 157, 88, 0.15),
    rgba(15, 157, 88, 0.15) 2px,
    transparent 2px,
    transparent 10px
  );
}

.screen-image {
  --uno: hfull wfull absolute z-1 left-0 top-0;
  background-image: url("/img/mountains.jpg");
  background-size: 300%;
  background-position: 0% 0%;
  filter: hue-rotate(230deg);
  opacity: 0.6;
  animation: pan-image 15s linear infinite;
}

@keyframes pan-overlay {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 0% -100%;
  }
}

@keyframes pan-image {
  0% {
    background-position: 36% 42%;
    background-size: 200%;
  }

  20% {
    background-position: 30% 35%;
    background-size: 200%;
  }

  20.0001% { /* -- View 2 -- */
    background-position: 60% 85%;
    background-size: 500%;
  }

  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }

  40.0001% { /* -- View 3 -- */
    background-position: 80% 42%;
    background-size: 300%;
  }

  60% {
    background-position: 84% 33%;
    background-size: 300%;
  }

  60.0001% { /* -- View 4 -- */
    background-position: 0% 0%;
    background-size: 300%;
  }

  80% {
    background-position: 15% 4%;
    background-size: 300%;
  }

  80.0001% { /* -- View 5 -- */
    background-position: 80% 10%;
    background-size: 300%;
  }

  100% {
    background-position: 72% 14%;
    background-size: 300%;
  }
}
</style>
