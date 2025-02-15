<script setup lang="ts">
// add hash to url when scrolling
// const scroll = () => {
//   const sections = document.querySelectorAll("main > div");
//   const navLinks = document.querySelectorAll("nav a");
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const id = entry.target.getAttribute("id");
//         if (entry.isIntersecting) {
//           navLinks.forEach((link) => {
//             link.classList.remove("active");
//             if (link.hash === `#${id}`) {
//               link.classList.add("active");
//             }
//           });
//           history.replaceState(null, null, `#${id}`);
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   sections.forEach((section) => {
//     observer.observe(section);
//   });
// };
</script>

<template>
  <main id="hello">
    <!-- gradients -->
    <div class="css-blurry-gradient-blue"></div>
    <div class="css-blurry-gradient-green"></div>
    <div class="d-flex h-full w-full" id="intro">
      <Hello />
    </div>
    <div class="d-flex h-full w-full" id="about-me">
      <Hello />
    </div>
    <div class="d-flex h-full w-full" id="projects">
      <Projects />
    </div>
  </main>
</template>

<style scoped>
#hello {
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  padding-left: 275px;
  overflow: scroll;
}
</style>
