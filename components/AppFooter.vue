<template>
  <footer
    class="flex md:justify-between border-top text-menu-text font-fira_retina"
  >
    <!-- social icons -->
    <div class="w-full flex justify-between md:justify-start">
      <span
        id="social-title"
        class="h-full flex justify-center items-center border-right px-5"
      >
        find me in:
      </span>
      <div id="social-icons" class="flex">
        <NuxtLink
          to="https://www.linkedin.com/in/nguyen-thi-le/"
          target="_blank"
          class="flex justify-center items-center"
        >
          <v-icon>mdi-linkedin</v-icon>
        </NuxtLink>
        <NuxtLink
          to="https://www.facebook.com/Mio1710"
          target="_blank"
          class="flex justify-center items-center"
        >
          <img src="/pwa/icons/social/facebook.svg" />
        </NuxtLink>
        <NuxtLink
          :to="social.github.url + social.github.user"
          target="_blank"
          class="flex md:hidden justify-center items-center"
        >
          <img src="/pwa/icons/social/github.svg" />
        </NuxtLink>
      </div>
    </div>

    <!-- github user -->
    <NuxtLink
      :to="social.github.url + 'mio1710'"
      target="_blank"
      class="hidden md:flex items-center px-5 border-left"
    >
      @mio1710
      <img src="/pwa/icons/social/github.svg" />
    </NuxtLink>
  </footer>
</template>

<style>
footer {
  height: 40px;
  min-height: 40px;
  font-size: 13px;
}

footer a:hover {
  background-color: #1e2d3d74;
}

#social-icons > a {
  border-right: 1px solid #1e2d3d;
  height: 100%;
  width: 50px;
}

#social-icons > a > img {
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
  margin: auto;
  opacity: 0.4;
}

footer > a > img {
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
  margin-left: 0.5rem; /* 8px */
}

#social-icons > a:hover img {
  opacity: 1;
}

@media (max-width: 768px) {
  #social-title {
    border-right: none;
  }

  #social-icons > a {
    border-right: none;
    border-left: 1px solid #1e2d3d;
  }

  #social-icons > a > img {
    width: 1.5rem; /* 20px */
    height: 1.5rem; /* 20px */
  }
}
</style>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      route: this.$route.path,
    };
  },
  setup() {
    return {
      social: useRuntimeConfig().public.dev.contacts.social,
    };
  },
};
</script>
