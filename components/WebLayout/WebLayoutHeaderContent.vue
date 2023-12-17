<template>
  <nav navigation>
    <ProfileLogo />
    <div flex-auto />
    <!-- <ProfileLink name="Home" to="/" icon="i-solar:home-angle-outline" /> -->
    <ProfileLink name="Articles" to="/posts" icon="i-solar:archive-minimalistic-outline" />
    <ProfileLink name="Projects" to="/projects" icon="i-solar:folder-outline" />
    <ProfileLink name="Experience" to="/experience" icon="i-simple-icons:readdotcv" />
    <ProfileIconLink name="Twitter" to="https://x.com/" icon="i-line-md:twitter-x" />
    <ProfileIconLink name="Github" to="https://github.com/Tomas-Studio" icon="i-line-md:github" />
    <ProfileIconLink name="RSS" to="https://github.com/Tomas-Studio" icon="i-streamline:rss-square" />
    <ColorSchemeToggle />
  </nav>
</template>
