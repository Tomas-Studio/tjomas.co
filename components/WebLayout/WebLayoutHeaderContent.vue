<template>
  <nav navigation>
    <ProfileLogo />
    <div flex-auto />
    <!-- <ProfileLink name="Home" to="/" icon="i-solar:home-angle-outline" /> -->
    <ProfileLink name="articles" to="/articles" icon="i-fluent:document-one-page-multiple-24-regular" />
    <ProfileLink name="projects" to="/projects" icon="i-solar:folder-outline" />
    <!-- <ProfileLink name="experience" to="/experience" icon="i-simple-icons:readdotcv" /> -->
    <ProfileLink name="About" to="/about" icon="i-simple-icons-aboutdotme" />
    <ProfileIconLink name="Twitter" to="https://x.com/@TunjiOlakunle" icon="i-line-md:twitter-x" />
    <ProfileIconLink name="Github" to="https://github.com/Tomas-Studio" icon="i-line-md:github" />
    <ProfileIconLink name="RSS" to="https://github.com/Tomas-Studio" icon="i-streamline:rss-square" />
    <ColorSchemeToggle />
  </nav>
</template>
