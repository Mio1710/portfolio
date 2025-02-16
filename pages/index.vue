<script setup lang="ts">
import { useElementVisibility, useIntersectionObserver } from "@vueuse/core";

import { vElementVisibility } from "@vueuse/components";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AboutMe from "../components/about-me.vue";
import ContactMe from "../components/contact-me.vue";

// Refs for elements
const introRef = ref(null);
const aboutMeRef = ref(null);
const projectsRef = ref(null);
const contactMeRef = ref(null);
const router = useRouter();
const route = useRoute();

// Observe each element
useIntersectionObserver(
  introRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log("intro is visible");
      router.replace({ hash: `#${introRef.value.id}` });
    }
  },
  { threshold: 0.3 }
);

useIntersectionObserver(
  aboutMeRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log("about-me is visible");
      router.replace({ hash: `#${aboutMeRef.value.id}` });
    }
  },
  { threshold: 0.3 }
);

useIntersectionObserver(
  projectsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log("projects is visible");
      router.replace({ hash: `#${projectsRef.value.id}` });
    }
  },
  { threshold: 0.3 }
);
useIntersectionObserver(
  contactMeRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log("contact-me is visible");
      router.replace({ hash: `#${contactMeRef.value.id}` });
    }
  },
  { threshold: 0.3 }
);
</script>

<template>
  <main id="hello">
    <div
      class="d-flex my-4 h-full w-full position-relative"
      id="intro"
      ref="introRef"
    >
      <Hello />
    </div>
    <div
      class="d-flex h-full w-full items-center"
      id="about-me"
      ref="aboutMeRef"
    >
      <AboutMe />
    </div>
    <div class="d-flex h-full w-full" id="projects" ref="projectsRef">
      <Projects />
    </div>
    <div
      class="d-flex h-full w-full items-center"
      id="contact-me"
      ref="contactMeRef"
    >
      <ContactMe />
    </div>
  </main>
</template>

<style scoped>
#hello {
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  padding: 0 250px;
  overflow: scroll;
}
</style>
