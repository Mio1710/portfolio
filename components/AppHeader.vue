<template>
  <header id="navbar" class="w-full hidden lg:flex flex-col">
    <nav class="w-full flex justify-between border-bot">
      <github-corner url="https://github.com/Mio1710/portfolio" />
      <div class="flex">
        <NuxtLink id="nav-logo" to="#intro">
          {{ config.public.dev.logo_name }}
        </NuxtLink>

        <NuxtLink
          id="nav-link"
          :to="{ hash: '#intro' }"
          :external="!isActive('#intro')"
        >
          _hello
        </NuxtLink>

        <NuxtLink
          id="nav-link"
          to="/#about-me"
          :external="!isActive('#about-me')"
        >
          _about-me
        </NuxtLink>

        <NuxtLink
          id="nav-link"
          to="/#projects"
          :external="!isActive('#projects')"
        >
          _projects
        </NuxtLink>
      </div>

      <NuxtLink
        id="nav-link-contact"
        to="#contact-me"
        :class="{ active: false }"
      >
        _contact-me
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
import GithubCorner from "./GithubCorner.vue";
export default {
  name: "AppHeader",
  components: {
    GithubCorner,
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return (route) => {
        return this.$route.hash === route;
      };
    },
  },
  setup() {
    const config = useRuntimeConfig();

    return {
      config,
    };
  },
};
</script>

<style>
#nav-link {
  border-right: 1px solid #1e2d3d;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link-contact {
  border-left: 1px solid #1e2d3d;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link:hover,
#nav-link-contact:hover {
  background-color: #1e2d3d74;
  color: white;
}

#nav-logo {
  border-right: 1px solid #1e2d3d;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-logo:hover {
  background-color: #1e2d3d74;
  color: white;
}

#nav-link.router-link-active,
#nav-link-contact.router-link-active {
  border-bottom: 2px solid #fea55f;
  color: white;
}

#nav-logo.router-link-active {
  border-right: 1px solid #1e2d3d;
  border-bottom: none;
  @apply text-menu-text;
}

#navbar > nav {
  height: 45px;
  font-size: 13px;
}
</style>
